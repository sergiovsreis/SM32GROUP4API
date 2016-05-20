/**
 * Created by MikeVoermans on 20/05/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberMoodSchema = new Schema({
    url: String
});

var MemberMoodModel = mongoose.model('Picture', MemberMoodSchema);

MemberMoodSchema.pre('save', function (next) {
    next();
});

module.exports = MemberMoodModel;