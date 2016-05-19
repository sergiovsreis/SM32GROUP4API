var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({test: 'hoi'});
});

var groupApi = require('./group/index');
var memberApi = require('./member/index');
var locationApi = require('./location/index');

//Group API
router.post('/addMember', groupApi.update);
router.post('/getGroupMember', groupApi.get);
router.post('/group', groupApi.create);

//Member API
router.post('/member', memberApi.create);
router.post('/member/login', memberApi.login);
router.get('/member', memberApi.requireUser, function(req,res, next) {
    res.json({
        works: true,
        loggedInAs: req.user.username
    });
});

//Location API
router.post('/location', locationApi.create);

module.exports = router;
