/**
 * Created by Sergio Reis on 29-04-16.
 */
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var moodCreate = require('./create');

module.exports.upload = upload;


module.exports.create = moodCreate.create;



