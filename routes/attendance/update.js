/**
 * Created by Sergio Reis on 12-05-16.
 */
var Attendance = require('../../models/Attendance');

module.exports.update = function(req, res, next) {

    var member = req.user._id;
    var group = req.body.group;

    Attendance.findOne({member: member, statusIn: 'checkIn', group: group}).populate('group').exec(function(err, doc) {
        if(err)
        {
            return next(err);
        }
        doc.group.checkIns -= 1;
        doc.group.save();
        doc.statusIn = 'checkOut';
        doc.checkOut = Date.now();
        doc.save(function(err, nums) {
            if(err)
            {
                return next(err);
            }
            res.json({
                updated: nums + " rij" + nums == 1 ? '' : 'en',
                success: true
            })
        });
    });
};

