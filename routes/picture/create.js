/**
 * Created by Sergio Reis on 12-05-16.
 */
var Picture = require('../../models/Picture');


module.exports.create = function(req, res, next) {
    var url = req.body.url;


    if (typeof(url) === 'undefined' || url === '') {
        return next(new Error('picture url is empty'));
    }



    var picture = new Picture({
        url: url
    });

    picture.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json({
                picture: {
                    id : picture.id,
                    url: picture.url
                },
                success: true
            });
        }
    });


};


