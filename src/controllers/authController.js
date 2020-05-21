const express = require('express');

// vocẽ digitou assim
// const User = require('../models/User');
// isso é o correto
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const user = await User.create(req.body);

        return res.send({ user });
    }   catch(err) {
        return res.status(400).send({error: 'Registration failed'})
    }
});

module.exports = app => app.use('/auth', router);
