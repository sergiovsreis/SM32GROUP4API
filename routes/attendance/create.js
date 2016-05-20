/**
 * Created by Sergio Reis on 12-05-16.
 */
var Attendance = require('../../models/Attendance');




module.exports.create = function(req, res, next) {
    var checkIn = req.body.checkIn;
    //var checkOut = req.body.checkOut;
    var status = "checkIn";
    var member = req.body.member;

    if (typeof(checkIn) === 'undefined' || checkIn === '') {
        return next(new Error('checkIn is empty'));
    }


    var attendance = new Attendance({
        checkIn: checkIn,
        statusIn: status,
        member: req.body.member
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
                    member: attendance.member
                },
                success: true
            });
        }
    });


};


