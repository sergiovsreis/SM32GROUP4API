/**
 * Created by rensphilipsen on 29-04-16.
 */
var Member = require('../../models/Member');
var sha1 = require('sha1');

module.exports.create = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (typeof(username) === 'undefined' || username === '') {
        return next(new Error('Username is empty'));
    }

    if (typeof(password) === 'undefined' || password === '') {
        return next(new Error('Password is empty'));
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
            return next(new Error('Something went wrong while creating your member'));
        } else {
            res.json({
                member: member,
                success: true
            });
        }
    });
};
