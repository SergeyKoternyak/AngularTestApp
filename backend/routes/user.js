const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const passwordHash = require('password-hash');

// Login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) { return console.log(err); }

        if (!user) {
            return res.send({
                status: 'wrongEmail',
                message: `Пользователь ${req.body.email} не найден`
            });
        }

        if (!passwordHash.verify(req.body.password, user.password)) {
            return res.send({
                status: 'wrongPassword',
                message: 'Неверный пароль'
            });
        }

        return res.send({
            status: 'ok',
            userId: user._id
        });
    });

})

// Registration
router.post('/registration', (req, res) => {
    User.findOne({ email: req.body.email }, (err, findUser) => {
        if (findUser) {
            return res.send({ status: `Пользователь с ${ req.body.email } уже сужествует!` });
        }
  
        new User(Object.assign(req.body, {
            password: passwordHash.generate(req.body.password)
        })).save();
        res.send({status: 'save'});
    });
});

module.exports = router;
