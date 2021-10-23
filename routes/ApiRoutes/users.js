const Users = require('../../models/Users');
const router = require('express').Router();

// create user
router.post('/', async (req, res) => {
    console.log('made it to backend post');
    try {
        const userData = await Users.create(req.body);
        console.log(userData)
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// logging in
router.post('/signin', async (req, res) => {
    try {
    const userData = await Users.findOne({ where: { email: req.body.email } });
    console.log(userData)
    if(!userData) {
        console.log("line 26 users.js ", error);
        res.status(400).json({ message: 'Please try again, email or password is incorrect.' });
        return;
    }
    const validPassword = await userData.validatePassword(req.body.password);

    if(!validPassword) {
        res.status(400).json({ message: 'Please try again, email or password is incorrect.' });
        return;
    }
    req.session.save(() => {
        req.session.userId = userData.id;
        req.session.loggedIn = true;
        res.json({ user: userData, message: `Welcome back: ${Users}!`});
    
    }); 
}catch (error) {
        res.status(400).json(error);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }else {
        res.status(console.log('error is ', error)).end();
    }
});

// router.post('/logOut', (req, res) => {
//     if(req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });

// router.post('/sign-in/:username', async (req, res) =>{
//     const user = await Users.findOne({where: { username: req.params.username},
    
//     }).catch((error) => {
//         res.status(500).json('Sorry but who are you? Please try to login again.');
//     });
//     if(user) {
//         const validated = await user.validatePassword(req.body.password)
//         .catch(error => {
//             res.status(404).json('Sorry but that information was incorrect.');
//         });
//         if (validated) {
//             req.session.save(() =>{
//                 req.session.loggedIn = true;
//                 res.status(202).json(validated);
//             });
//         }else{
//             res.status(404).json('sorry but the username and/ or password is incorrect.');
//         }
//     }
// });


// Old Idea for signing in = createUsers route
// router.get('/', async (req, res) => {
//     const users = await Users.findAll().catch((error) =>{
//         res.status(500).json('Sorry but we lost little Timmy, please try again.');
//     });
//     res.status(200).json(user);
// });

module.exports = router;