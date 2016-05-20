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

//Group API
router.put('/group', groupApi.update);
router.post('/group', groupApi.create);
router.get('/group/:id', groupApi.getMembers, function(req,res, next) {
    res.json({
        works: true,
        group: req.group,
        members: req.members
    });
});

//Member API
router.post('/group', memberApi.create);
router.post('/member', memberApi.create);

//Location API
router.post('/location', locationApi.create);
router.get('/location/:group_id/:member_id', locationApi.getLocation, function(req,res, next) {
    res.json({
        works: true,
        pos: req.pos
    });
});

//Attendance API
router.post('/attendance', attendanceApi.create);

router.post('/member/login', memberApi.login);
router.get('/member', memberApi.requireUser, function(req,res, next) {
    res.json({
        works: true,
        loggedInAs: req.user.username
    });
});
module.exports = router;
