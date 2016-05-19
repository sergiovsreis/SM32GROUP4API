var GroupModel = require('../../models/Group');

module.exports.update = function(req, res, next) {
    var id= req.body.id;
    var member_id = req.body.member_id;
    var name = "";
    GroupModel.find({_id :  id}, function (err, docs) {
        if (err) {
            return next(err);
        }
        else {
            name = docs[0].name;
        }
    });

    GroupModel.update(
        {_id: id},
        {$push : {"members": member_id} }, function(err,doc) {
            if(err){
                return next(err);
            }
            else{
                res.json({
                    message: "Succesvol added member to group " + name,
                    success: true
                })
            }
    });
}