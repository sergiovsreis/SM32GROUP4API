var Group = require('../../models/Group');

module.exports.create = function(req, res, next) {
    var name = req.body.name;
    var members = req.body.members || [];

    members.unshift(req.user.id);
    console.log(members);
    var group = new Group({
        name: name,
        checkIns: 0,
        members: members
    });

    group.save(function (err, gro) {
        if (err) {
            return next(new Error('Something went wrong while creating a location'));
        } else {
            res.json({
                group: {
                    id: gro.id,
                    name: group.name,
                    checkIns: 0,
                    members: [req.user.username]
                },
                success: true
            });
        }
    });
};