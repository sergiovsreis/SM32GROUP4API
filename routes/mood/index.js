/**
 * Created by Sergio Reis on 29-04-16.
 */
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var moodCreate = require('./create');
var moodGet = require('./get');

module.exports.upload = upload;


module.exports.create = moodCreate.create;

module.exports.get = moodGet.get;


