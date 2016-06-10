var Member = require('../../models/Member');
var Token = require('../../models/AccessToken');
var sha1 = require('sha1');
var crypto = require('crypto');
var requestIp = require('request-ip');

module.exports.login = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (typeof(username) === 'undefined' || username === '') {
        return next(new Error('Username is empty'));
    }

    if (typeof(password) === 'undefined' || password === '') {
        return next(new Error('Password is empty'));
    }


    Member.findOne({username: username, password: sha1(password)}, function(err, member) {
       if(err || member == null)
       {
           if(err == null)
           {
               err = new Error('Username and password do not match.');

           }

           err.status = 401;
           return next(err);
       }

        Token.findOne({member: member.id}, function(err, doc) {
           if(doc == null) {
               var token = new Token({
                   member: member.id,
                   token: crypto.randomBytes(16).toString('hex'),
                   ip: requestIp.getClientIp(req)
               });

               token.save(function(err, doc) {
                   res.json({
                       mid: member.id,
                       token: doc.token,
                       success: true
                   });
               });
           }  else {
               res.json({
                   mid: member.id,
                   token: doc.token,
                   success: true
               });
           }
        });

    });
};


module.exports.requireUser = function(req, res, next) {
    var token = req.query.token || req.body.token;
    if(typeof(token) === 'undefined' || token == '')
    {
        var err = new Error('Unauthorized: Access is denied due to invalid credentials.');
        err.status = 401;
        return next(err);
    }

    Token.findOne({token: token}).populate('member').exec(function(err, doc) {
        if(err || doc == null)
        {
            var err = new Error('Unauthorized: Access is denied due to invalid credentials.');
            err.status = 401;
            return next(err);
        }
        req.user = doc.member;
        next();
    });
};