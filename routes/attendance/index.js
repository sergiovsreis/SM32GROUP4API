/**
 * Created by Sergio Reis on 29-04-16.
 */

var attendanceCreate = require('./create');
var attendanceUpdate = require('./update');

module.exports.create = attendanceCreate.create;
module.exports.update = attendanceUpdate.update;

