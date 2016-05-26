var MemberMood = require('../../models/MemberMood');
var Member = require('../../models/Member');
var Group = require('../../models/Group');

module.exports.create = function(req, res, next) {
    console.log(req.body);
    var member = req.body.member;
    var group = req.body.group;
    var mood = req.body.mood;
    var description = req.body.description;

    if (typeof(member) === 'undefined' || member === '') {
        return next(new Error('Member ID is empty'));
    }

    if (typeof(mood) === 'undefined' || mood === '') {
        return next(new Error('Mood ID is empty'));
    }

    if (typeof(group) === 'undefined' || group === '') {
        return next(new Error('Group ID is empty'));
    }

    if(Member.count({_id: member}) == 0 ){
        return next(new Error('Member not found'));
    }

    if(Group.count({_id: group}) == 0 ){
        return next(new Error('Group not found'));
    }

    var memberMood = new MemberMood({
        mood: mood,
        member: member,
        group: group,
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
