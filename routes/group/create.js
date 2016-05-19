var Group = require('../../models/Group');

module.exports.create = function(req, res, next) {
    var name = req.body.name;

    var group = new Group({
        name: name
    });

    group.save(function (err, gro) {
        if (err) {
            return next(new Error('Something went wrong while creating a location'));
        } else {
            res.json({
                group: group,
                success: true
            });
        }
    });
};