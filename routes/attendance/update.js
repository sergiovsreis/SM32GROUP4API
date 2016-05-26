/**
 * Created by Sergio Reis on 12-05-16.
 */
var Attendance = require('../../models/Attendance');

module.exports.update = function(req, res, next) {

    var checkOut = req.body.checkOut;
    var status = "checkOut";
    var member = req.body.member;
    var id = req.body.id;

    if (typeof(checkOut) === 'undefined' || checkOut === '' || typeof(member) === 'undefined' || member === '')
    {
        return next(new Error('checkIn is empty'));
    }

    Attendance.find({member: member, statusIn: 'checkIn'}).populate('group').exec(function(err, doc) {
       if(err)
       {
           return next(err);
       }
        doc.group.checkIns -= 1;
        doc.group.save();
        doc.statusIn = 'checkOut';
        doc.checkOut = checkOut;
        doc.save(function(err, nums) {
            if(err)
            {
                return next(err);
            }
            res.json({
                updated: nums + " rij" + nums == 1 ? '' : 'en',
                success: true
            })
        });
    });

    /*
    Attendance.update(query, {$set: { statusIn: 'checkOut', checkOut: checkOut }}, callback);

    function callback (err, numAffected) {
        if(err)
        {
            return next(err);
        }
        else
        {
            res.json({
                updated: numAffected + " rij(en)",
                success: true
            });
        }
    };*/



};

