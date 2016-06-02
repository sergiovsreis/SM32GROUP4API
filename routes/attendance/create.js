/**
 * Created by Sergio Reis on 12-05-16.
 */
var Attendance = require('../../models/Attendance');
var Group = require('../../models/Group');



module.exports.create = function(req, res, next) {
   // var checkIn = req.body.checkIn;
    //var checkOut = req.body.checkOut;
    var status = "checkIn";
    var group = req.body.group;



  /*  if (typeof(checkIn) === 'undefined' || checkIn === '') {
        return next(new Error('checkIn is empty'));
    }
*/
/*    if(Group.count({_id : group, member : {$in : member}}) === 0)
    {

    }*/

    Group.findOne({_id: group, members: req.user.id}, function(err, doc) {
        if(err != null || doc == null || doc.length == 0)
        {
            return next('No groups found with member: ' + req.user.id);
        }

        var today = new Date();
        var weeknumber = today.getWeek();


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
};


