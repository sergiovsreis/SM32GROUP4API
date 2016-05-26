/**
 * Created by Sergio Reis on 12-05-16.
 */
var Attendance = require('../../models/Attendance');
var Group = require('../../models/Group');



module.exports.create = function(req, res, next) {
    console.log(req.body);
    var checkIn = req.body.checkIn;
    //var checkOut = req.body.checkOut;
    var status = "checkIn";
    var member = req.body.member;
    var group = req.body.group;

    if (typeof(checkIn) === 'undefined' || checkIn === '') {
        return next(new Error('checkIn is empty'));
    }

    if(Group.count({_id :  group, member : {$in : member}}) === 0)
    {
        return next('No groups found with member: ' + member);
    }


    var attendance = new Attendance({
        checkIn: checkIn,
        statusIn: status,
        member: req.body.member,
        group: group
    });

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


};


