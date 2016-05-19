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
router.post('/addMember', groupApi.update);
router.post('/getGroupMember', groupApi.get);
router.post('/group', groupApi.create);

//Member API
router.post('/group', memberApi.create);
router.post('/member', memberApi.create);

//Location API
router.post('/location', locationApi.create);

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
