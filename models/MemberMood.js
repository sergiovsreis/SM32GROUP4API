///**
// * Created by MikeVoermans on 20/05/16.
// */
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//
//var MemberMoodSchema = new Schema({
//    mood: { ype: Schema.Types.ObjectId, ref: 'Mood'},
//    member: { ype: Schema.Types.ObjectId, ref: 'Member'},
//    group: { ype: Schema.Types.ObjectId, ref: 'Group'},
//    member_description: String
//});
//
//var MemberMoodModel = mongoose.model('MemberMood', MemberMoodSchema);
//
//MemberMoodSchema.pre('save', function (next) {
//    next();
//});
//
//module.exports = MemberMoodModel;