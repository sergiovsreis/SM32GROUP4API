var express = require('express');
var sha1 = require('sha1');
var User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

router.post('/user', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (typeof(username) === 'undefined' || username === '') {
        res.status(500);
        res.json({
            message: 'Username is empty!',
            success: false
        });
        return;
    }

    if (typeof(password) === 'undefined' || password === '') {
        res.status(500);
        res.json({
            message: 'Password is empty!',
            success: false
        });
        return;
    }

    password = sha1(password);
    var user = new User({
        username: username,
        password: password,
        role: {
            level: 0,
            description: 'Member'
        }
    });


    user.save(function (err) {
        if (err) {
            res.status(500);
            res.json({
                message: 'Something went wrong while creating your user',
                error: err,
                success: false
            });
        } else {
            res.json({
                user: user,
                success: true
            });
        }
    });
});

module.exports = router;
