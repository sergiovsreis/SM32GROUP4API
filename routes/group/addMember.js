var GroupModel = require('../../models/Group');

module.exports.update = function(req, res, next) {
    var group= req.body.group;
    var member = req.body.member;

    GroupModel.find({_id :  group}, function (err, docs) {
        if (err) {
            return next(err);
        }
    });

    GroupModel.update(
        {_id: id},
        {$push : {"members": member} }, function(err,doc) {
            if(err){
                return next(err);
            }
            else{
                res.json({
                    message: "Succesvol added member to group ",
                    success: true
                })
            }
    });
}