var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

var memberApi = require('./member/index');
var locationApi = require('./location/index');


router.post('/member', memberApi.create);
router.post('/location', locationApi.create);


module.exports = router;
