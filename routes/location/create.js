/**
 * Created by fhict on 12/05/16.
 */
/**
 * Created by MikeVoermans on 29-04-16.
 */
var Location = require('../../models/Location');
var Member = require('../../models/Member');

module.exports.create = function(req, res, next) {
    var member = req.body.member;

    if (typeof(member) === 'undefined' || member === '') {
        return next(new Error('Member ID is empty'));
    }

    if(Member.count({_id: member}) == 0 ){
        return next(new Error('Member not found'));
    }

    var location = new Location({
        lng: req.body.lng,
        lat: req.body.lat,
        member: req.body.member,
        group: req.body.group
    });

    location.save(function (err, loc) {
        if (err) {
            return next(new Error('Something went wrong while creating a location'));
        } else {
            res.json({
                location: location,
                success: true
            });
        }
    });
};
