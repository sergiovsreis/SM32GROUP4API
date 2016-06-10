var Mood = require('../../models/Mood');

module.exports.get = function (req, res, next) {
    Mood.find({},function(error, docs) {
        var moods = [];

        docs.forEach(function(doc) {
            moods.push ({
                description: doc.description,
                pic: doc.picture.toString('base64')
            });
        });
        res.json({
            success: true,
            docs: moods
        });
    });
};