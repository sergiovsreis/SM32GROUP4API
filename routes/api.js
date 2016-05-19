var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

var memberApi = require('./member/index');
var locationApi = require('./location/index');
var attendanceApi = require('./attendance/index');



router.post('/member', memberApi.create);
router.post('/location', locationApi.create);
router.post('/attendance', attendanceApi.create);

module.exports = router;
