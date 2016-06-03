var Attendance = require('../../models/Attendance');

module.exports.get = function (req, res, next) {
    var id = req.params.group;

    GroupModel.findOne({_id :  group}, function (err, docs) {
        if (err) {
            return next(err);
        } else {
            req.members = docs.members;
            req.name = docs.name;
            next();
        }
    });
}