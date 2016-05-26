var GroupModel = require('../../models/Group');

module.exports.create = function(req, res, next) {
    console.log(req.body);
    var name = req.body.name;

    var group = new GroupModel({
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