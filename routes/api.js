var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

var memberApi = require('./member/index');
var locationApi = require('./location/index');


router.post('/group', memberApi.create);
router.post('/member', memberApi.create);
router.post('/location', locationApi.create);


router.post('/member/login', memberApi.login);
router.get('/member', memberApi.requireUser, function(req,res, next) {
    res.json({
        works: true,
        loggedInAs: req.user.username
    });
});
module.exports = router;
