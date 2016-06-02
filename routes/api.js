var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

var memberApi = require('./member/index');
var locationApi = require('./location/index');
var groupApi = require('./group/index');
var attendanceApi = require('./attendance/index');
var pictureAPI = require('./picture/index');
var moodAPI = require('./mood/index');
var memberMoodApi = require('./MemberMood/index');

//Group API
router.put('/group',  groupApi.update);
router.post('/group', memberApi.requireUser, groupApi.create);

router.get('/group/:id', groupApi.getMembers, function(req,res, next) {
    res.json({
        success: true,
        group: req.group,
        members: req.members
    });
});

//MemberMood API
router.post('/MemberMood', memberMoodApi.create);

//Member API
router.post('/member', memberApi.create);

//Location API
router.post('/location', locationApi.create);
router.get('/location/:group_id/:member_id', locationApi.getLocation);

//Attendance API
router.post('/attendance', memberApi.requireUser, attendanceApi.create);
router.put('/attendance', memberApi.requireUser, attendanceApi.update);
router.get('/attendance/:group/:week', attendanceApi.getAttendace)

//Picture API
router.post('/picture', pictureAPI.create);

//Mood API
router.post('/mood', moodAPI.create);


router.post('/member/login', memberApi.login);
router.get('/member', memberApi.requireUser, groupApi.findGroup);

module.exports = router;
