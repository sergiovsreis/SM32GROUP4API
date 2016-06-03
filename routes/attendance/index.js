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
    var weeknr = req.params.week;
    var member = req.params.member;

    var groupAverage = {};
    var classAverage = {};
    var memberAverage = {};
    var ntasks_left_to_go = 21;

    //Member attendance
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 1 }, function(err, count){
        memberAverage.mo = count;
        callback();
    });
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 2 }, function(err, count){
        memberAverage.tu = count;
        callback();
    });
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 3 }, function(err, count){
        memberAverage.we = count;
        callback();
    });
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 4 }, function(err, count){
        memberAverage.th = count;
        callback();
    });
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 5 }, function(err, count){
        memberAverage.fr = count;
        callback();
    });
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 6 }, function(err, count){
        memberAverage.sa = count;
        callback();
    });
    Attendance.count({group : group, member : member, week: weeknr, weekDay: 7 }, function(err, count){
        memberAverage.su = count;
        callback();
    });


    //Group attendance
    Attendance.count({group : group, week: weeknr, weekDay: 1 }, function(err, count){
        groupAverage.mo = count;
        callback();
    });
    Attendance.count({group : group, week: weeknr, weekDay: 2 }, function(err, count){
        groupAverage.tu = count;
        callback();
    });
    Attendance.count({group : group, week: weeknr, weekDay: 3 }, function(err, count){
        groupAverage.we = count;
        callback();
    });
    Attendance.count({group : group, week: weeknr, weekDay: 4 }, function(err, count){
        groupAverage.th = count;
        callback();
    });
    Attendance.count({group : group, week: weeknr, weekDay: 5 }, function(err, count){
        groupAverage.fr = count;
        callback();
    });
    Attendance.count({group : group, week: weeknr, weekDay: 6 }, function(err, count){
        groupAverage.sa = count;
        callback();
    });
    Attendance.count({group : group, week: weeknr, weekDay: 7 }, function(err, count){
        groupAverage.su = count;
        callback();
    });

    //Average Group attendance
    var count = 0;
    var devision = 0;
    var id_previous = "";

    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 1 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.mo = count;
        callback();
    });
    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 2 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.tu = count;
        callback();
    });
    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 3 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.we = count;
        callback();
    });
    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 4 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.th = count;
        callback();
    });
    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 5 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.fr = count;
        callback();
    });
    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 6 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.sa = count;
        callback();
    });
    Attendance.find({group : {$ne: group}, week: weeknr, weekDay: 7 }, function(err, data){
        count = data.length;
        if(count >= 1) {
            devision = 0;
            for (var i = 0; i < data.length; i++) {
                if (!data[i]["group"].equals(id_previous)) {
                    devision++;
                }
                id_previous = data[i]["group"];
            }
            count = count / devision;
        }
        classAverage.su = count;
        callback();
    });

    var attendance = {};
    attendance.memberAverage = memberAverage;
    attendance.groupAverage = groupAverage;
    attendance.classAverage = classAverage;

    var callback = function(){
        ntasks_left_to_go -= 1;
        if(ntasks_left_to_go <= 0){
            //console.log(week);
            res.json({
                attendance: attendance,
                success: true
            });
        }
    }


}