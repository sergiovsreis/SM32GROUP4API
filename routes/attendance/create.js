/**
 * Created by Sergio Reis on 12-05-16.
 */
var Attendance = require('../../models/Attendance');
var Group = require('../../models/Group');



module.exports.create = function(req, res, next) {

    var status = "checkIn";
    var group = req.body.group;

    Group.findOne({_id: group, members: req.user._id}, function(err, doc) {
        if(err != null || doc == null || doc.length == 0)
        {
            return next('No groups found with member: ' + req.user.id);
        }

        Attendance.findOne({group: group, member: req.user._id, statusIn: status}, function(err2, doc2) {
            if(err2 != null || doc2 != null)
            {
                return next('You are already checked in!');
            }

            var attendance = new Attendance({
                checkIn: Date.now(),
                week: new Date().getWeek().toString(),
                weekDay: new Date().getDay(),
                statusIn: status,
                member: req.user._id,
                group: group
            });
            doc.checkIns += 1;
            doc.save();

            attendance.save(function (err) {
                if (err) {
                    return next(err);
                } else {
                    res.json({
                        attendance: {
                            id: attendance.id,
                            checkIn: attendance.checkIn,
                            statusIn: attendance.statusIn,
                            member: attendance.member,
                            group: attendance.group
                        },
                        success: true
                    });
                }
            });

        });
    });
};


