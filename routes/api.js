var express = require('express');
var sha1 = require('sha1');
var Member = require('../models/Member');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

router.post('/member', function(req, res) {
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
    var member = new Member({
        username: username,
        password: password,
        role: {
            level: 0,
            description: 'Member'
        }
    });


    member.save(function (err) {
        if (err) {
            res.status(500);
            res.json({
                message: 'Something went wrong while creating your member',
                error: err,
                success: false
            });
        } else {
            res.json({
                member: member,
                success: true
            });
        }
    });
});

module.exports = router;
