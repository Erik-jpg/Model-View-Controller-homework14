const userName = document.getElementById('userName');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const express = require('express')
const router = express.Router()
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

submitBtn.addEventListener('click', (event) => {
    const body ={
        userName: userName.value,
        password: password.value,
    };
    console.log('body is:', body);
    fetch('/api/Users', {
        method: 'POST',
        header: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((response) => response.json)
    .then((result) => console.log(result));
});



router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;