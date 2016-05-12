/**
 * Created by rensphilipsen on 29-04-16.
 */
var Member = require('../../models/Member');
var sha1 = require('sha1');
var fs = require('fs');
var path = require('path');


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
        pic: fs.readFileSync(path.join(__dirname, '/default_profile.jpg')),
       role: {
            level: 0,
            description: 'Member'
        }
    });


    member.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({
                member: {
                    id: member.id,
                    username: member.username
                },
                success: true
            });
        }
    });
};
