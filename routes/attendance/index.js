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

    var mo;
    var tu;
    var we;
    var th;
    var fr;
    var sa;
    var su;

    Attendance.count({group : group, week: week, weekDay: 1 }, function(err, count){
        mo = count;
    });
    Attendance.count({group : group, week: week, weekDay: 2 }, function(err, count){
        tu = count;
    });
    Attendance.count({group : group, week: week, weekDay: 3 }, function(err, count){
        we = count;
    });
    Attendance.count({group : group, week: week, weekDay: 4 }, function(err, count){
        th = count;
    });
    Attendance.count({group : group, week: week, weekDay: 5 }, function(err, count){
        fr = count;
    });
    Attendance.count({group : group, week: week, weekDay: 6 }, function(err, count){
        sa = count;
    });    Attendance.count({group : group, week: week, weekDay: 7 }, function(err, count){
        res.json({
            mo: mo,
            tu: tu,
            we: we,
            th: th,
            fr: fr,
            sa: sa,
            su: count,
            success: true
        });
    });
}