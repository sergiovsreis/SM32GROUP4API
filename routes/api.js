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
var memberMoodApi = require('./memberMood/index');

//Group API
router.put('/group', groupApi.update);
router.post('/group', groupApi.create);
router.get('/group/:id', groupApi.getMembers, function(req,res, next) {
    res.json({
        success: true,
        group: req.group,
        members: req.members
    });
});

//MemberMood API
router.post('/memberMood', memberMoodApi.create);
router.get('/memberMood/:group/:member', memberMoodApi.getMoods, function(req,res, next) {
    res.json({
        success: true,
        pos: req.mood
    });
});

//Member API
router.post('/group', memberApi.create);
router.post('/member', memberApi.create);

//Location API
router.post('/location', locationApi.create);
router.get('/location/:group/:member', locationApi.getLocation, function(req,res, next) {
    res.json({
        success: true,
        pos: req.pos
    });
});

//Attendance API
router.post('/attendance', attendanceApi.create);
router.put('/attendance', attendanceApi.update);

//Picture API
router.post('/picture', pictureAPI.create);

//Mood API
router.post('/mood', moodAPI.create);


router.post('/member/login', memberApi.login);
router.get('/member', memberApi.requireUser, function(req,res, next) {
    res.json({
        success: true,
        loggedInAs: req.user.username
    });
});
module.exports = router;
