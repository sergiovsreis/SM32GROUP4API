var GroupModel = require('../../models/Group');

module.exports.get = function(req, res, next) {
    var userId = req.user.id;

    GroupModel.find({members: userId}).populate('members').exec(function(err, docs) {

        if(err) {
            return next(err);
        }
        var groups = [];
        docs.forEach(function(doc) {
            var group = {
                id: doc.id,
                members: [],
                checkIns: doc.checkIns || 0,
                name: doc.name
            };
            doc.members.forEach(function(member) {
                group.members.push({
                    name : member.username,
                    pic: member.pic.toString('base64')
                });
            });
            groups.push(group);
        });

        res.json({
            success: true,
            groups: groups
        });
    });
};