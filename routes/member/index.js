/**
 * Created by rensphilipsen on 29-04-16.
 */

var memberCreate = require('./create');
var memberLogin = require('./login');

module.exports.create = memberCreate.create;
module.exports.login = memberLogin.login;
module.exports.requireUser = memberLogin.requireUser;