const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const newUser = await Users.create(req.body).catch(error => {
        res.status(500).json('Sorry but you are not allowed to make a new user at this time.');
    });
    req.session.save(() => {
        req.session.loggedIn = true;
        res.status(201).json(newUser);
    });
});

router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }else {
        res.status(404).end();
    }
});

router.post('/sign-in/:username', async (req, res) =>{
    const user = await Users.findOne({where: { username: req.params.username},
    
    }).catch((error) => {
        res.status(500).json('Sorry but who are you? Please try to login again.');
    });
    if(user) {
        const validated = await user.validatePassword(req.body.password)
        .catch(error => {
            res.status(404).json('Sorry but that information was incorrect.');
        });
        if (validated) {
            req.session.save(() =>{
                req.session.loggedIn = true;
                res.status(202).json(validated);
            });
        }else{
            res.status(404).json('sorry but the username and/ or password is incorrect.');
        }
    }
});

router.get('/', async (req, res) => {
    const users = await Users.findAll().catch((error) =>{
        res.status(500).json('Sorry but we lost little Timmy, please try again.');
    });
    res.status(200).json(user);
});

module.exports = router;