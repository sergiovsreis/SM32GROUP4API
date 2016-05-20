/**
 * Created by MikeVoermans on 20/05/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberMoodSchema = new Schema({
    mood: { type: Schema.Types.ObjectId, ref: 'Mood'},
    member: { type: Schema.Types.ObjectId, ref: 'Member'},
    group: { type: Schema.Types.ObjectId, ref: 'Group'},
    member_description: String
});

var MemberMoodModel = mongoose.model('MemberMood', MemberMoodSchema);

MemberMoodSchema.pre('save', function (next) {
    next();
});

module.exports = MemberMoodModel;