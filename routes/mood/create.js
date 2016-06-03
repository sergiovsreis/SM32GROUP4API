/**
 * Created by Sergio Reis on 12-05-16.
 */
var Mood = require('../../models/Mood');





module.exports.create = function(req, res, next) {
    var description = req.body.description;
    var picture = req.file.buffer;


    var mood = new Mood({
        description :  description,
        picture : picture
    });

    mood.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({
                mood: {
                    id : mood.id,
                    description: mood.description
                },
                success: true
            });
        }
    });


};


