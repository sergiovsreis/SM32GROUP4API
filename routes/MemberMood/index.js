/**
 * Created by MikeVoermans on 29-04-16.
 */
var memberMoodCreate = require('./create');
var MemberMoodModel = require('../../models/MemberMood');

module.exports.create = memberMoodCreate.create;

module.exports.getMoods = function (req, res, next) {
    var group = req.params.group;
    var member = req.params.member;

    MemberMoodModel.find({group :  group, member: member}, function (err, docs) {
        if (err) {
            return next(err);
        } else {
            res.json({
                memberMood: docs,
                success: true
            });
        }
    });
}