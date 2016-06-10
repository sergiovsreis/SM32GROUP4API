var GroupModel = require('../../models/Group');

module.exports.update = function(req, res, next) {
    var group= req.body.group;
    var member = req.body.member;
    var type = req.body.type || "insert";
    GroupModel.findOne({_id :  group}, function (err, group) {
        if (err) {
            return next(err);
        }
        if(type === "insert") {
            group.members.push(member);
        }
        if(type === "delete") {
            group.members.remove(member);
        }
        group.save(function(err, doc) {
            return res.json({
                success: true,
                members: doc.members
            });
        });
    });


}
