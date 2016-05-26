var Group = require('../../models/Group');

module.exports.create = function(req, res, next) {
    var name = req.body.name;

    var group = new Group({
        name: name,
        checkIns: 0,
        members: [req.user._id]
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