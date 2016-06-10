var Member = require('../../models/Member');
var Attendence = require('../../models/Attendance');

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
        Attendence.findOne({member: doc.id}).sort('-id').exec(function(err, attendence) {
            return res.json({
                success: true,
                result: {
                    id: doc.id,
                    user: doc.username,
                    lastseen: attendence != null ? attendence._id.getTimestamp() : null,
                    pic: doc.pic.toString('base64')
                }
            });
        });
    });
};