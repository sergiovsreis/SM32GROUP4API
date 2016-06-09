var Mood = require('../../models/Mood');

module.exports.get = function (req, res, next) {
    Mood.find({},function(error, docs) {
        console.log(error, docs);

        res.json({
            succes: true,
           docs: docs
        });
    });
};