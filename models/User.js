/**
 * Created by rensphilipsen on 29-04-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    role: {
        level: Number,
        description: String
    }
});

var UserModel = mongoose.model('User', UserSchema);

UserSchema.pre('save', function (next) {
    var self = this;
    UserModel.find({username : self.username}, function (err, docs) {
        if (!docs.length){
            next();
        } else {
            console.log('user exists: ',self.username);
            next(new Error("User exists!"));
        }
    });
});

module.exports = UserModel;