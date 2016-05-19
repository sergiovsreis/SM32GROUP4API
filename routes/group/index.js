var groupCreate = require('./create');
var groupGetGroupMembers = require('./getGroupMembers');
var addMember = require('./addMember');

module.exports.create = groupCreate.create;
module.exports.get = groupGetGroupMembers.get;
module.exports.update = addMember.update;