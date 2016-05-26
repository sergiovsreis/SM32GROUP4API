/**
 * Created by rensphilipsen on 29-04-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    name: String,
    members : [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    checkIns: Number
});

var GroupModel = mongoose.model('Group', GroupSchema);

GroupSchema.pre('save', function (next) {
    var self = this;
    GroupModel.find({group : self.name}, function (err, docs) {
        if (!docs.length){
            next();
        } else {
            console.log('group exists: ',self.name);
            next(new Error("Group exists!"));
        }
    });
});







module.exports = GroupModel;