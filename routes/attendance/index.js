/**
 * Created by Sergio Reis on 29-04-16.
 */

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

var attendanceCreate = require('./create');
var attendanceUpdate = require('./update');

module.exports.create = attendanceCreate.create;
module.exports.update = attendanceUpdate.update;

var Attendance = require('../../models/Attendance');


module.exports.getAttendace = function (req, res, next) {

    var group = req.params.group;
    var week = req.params.week;

    var week = {};


    var ntasks_left_to_go = 7;

    Attendance.count({group : group, week: week, weekDay: 1 }, function(err, count){
        week.mo = 1;
        callback();
    });
    Attendance.count({group : group, week: week, weekDay: 2 }, function(err, count){
        week.tu = 4;
        callback();
    });
    Attendance.count({group : group, week: week, weekDay: 3 }, function(err, count){
        week.we = 3;
        callback();
    });
    Attendance.count({group : group, week: week, weekDay: 4 }, function(err, count){
        week.th = 2;
        callback();
    });
    Attendance.count({group : group, week: week, weekDay: 5 }, function(err, count){
        week.fr = 1;
        callback();
    });
    Attendance.count({group : group, week: week, weekDay: 6 }, function(err, count){
        week.sa = 2;
        callback();
    });
    Attendance.count({group : group, week: week, weekDay: 7 }, function(err, count){
        week.su = 4;
        callback();
    });


    var callback = function(){
        ntasks_left_to_go -= 1;
        if(ntasks_left_to_go <= 0){
            console.log(week);
            res.json({
                week: week,
                success: true
            });
        }
    }


}