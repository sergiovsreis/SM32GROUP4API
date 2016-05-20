/**
 * Created by MikeVoermans on 29-04-16.
 */
var LocationModel = require('../../models/Location');
var locationCreate = require('./create');

module.exports.create = locationCreate.create;

module.exports.getLocation = function (req, res, next) {
    console.log("test");
    var group_id = req.params.group_id;
    var member_id = req.params.member_id;

    LocationModel.find({group :  group_id, member: member_id }, function (err, docs) {
        if(err) {
            return next(err);
        }
        else{
            var positions = [];
            for(var i=0;i<docs.length;i++){
                var position = {
                    lng: docs[i].lng,
                    lat: docs[i].lat
                };
                positions.push(position);
            }
            req.pos = positions;
            next();
        }
    });
}