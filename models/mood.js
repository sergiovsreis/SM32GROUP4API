/**
 * Created by MikeVoermans on 20/05/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoodSchema = new Schema({
    url: String
});

var MoodModel = mongoose.model('Mood', MoodSchema);

MoodSchema.pre('save', function (next) {
    next();
});

module.exports = MoodModel;