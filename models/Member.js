/**
 * Created by rensphilipsen on 29-04-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    username: String,
    password: String,
    role: {
        level: Number,
        description: String
    }
});

var MemberModel = mongoose.model('Member', MemberSchema);

MemberSchema.pre('save', function (next) {
    var self = this;
    MemberModel.find({username : self.username}, function (err, docs) {
        if (!docs.length){
            next();
        } else {
            console.log('user exists: ',self.username);
            next(new Error("User exists!"));
        }
    });
});

module.exports = MemberModel;