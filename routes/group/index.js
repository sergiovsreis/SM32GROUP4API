var groupCreate = require('./create');
var addMember = require('./addMember');

var GroupModel = require('../../models/Group');

module.exports.create = groupCreate.create;
module.exports.update = addMember.update;

module.exports.getMembers = function (req, res, next) {
    var id = req.params.id;
    GroupModel.findOne({_id :  id}, function (err, docs) {
        if (err) {
            return next(err);
        } else {
            req.members = docs.members;
            req.name = docs.name;
            next();
        }
    });
}