var MemberMood = require('../../models/MemberMood');
var Member = require('../../models/Member');
var Group = require('../../models/Group');

module.exports.create = function(req, res, next) {
    var member_id = req.body.member_id;
    var group_id = req.body.group_id;
    var mood_id = req.body.mood_id;
    var description = req.body.description;

    if (typeof(member_id) === 'undefined' || member_id === '') {
        return next(new Error('Member ID is empty'));
    }

    if(Member.count({_id: member_id}) == 0 ){
        return next(new Error('Member not found'));
    }

    if(Group.count({_id: group_id}) == 0 ){
        return next(new Error('Group not found'));
    }

    var memberMood = new MemberMood({
        mood: mood_id,
        member: member_id,
        group: group_id,
        description: description
    });

    memberMood.save(function (err, loc) {
        if (err) {
            return next(new Error('Something went wrong while creating a location'));
        } else {
            res.json({
                MemberMood: memberMood,
                success: true
            });
        }
    });
};
