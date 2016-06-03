var Member = require('../../models/Member');

module.exports.find = function(req, res, next) {
    var name = req.query.username;

    if(typeof(name) === 'undefined' || name.length == 0)
    {
        return next();
    }
    Member.findOne({username: name}, function(err, doc) {
        if(err || doc == null)
        {
            return res.json({
                success: false,
                message: 'Gebruiker niet gevonden'
            });
        }

        return res.json({
            success: true,
            result: {
                id: doc.id,
                user: doc.username,
                pic: doc.pic.toString('base64')
            }
        });
    });
};