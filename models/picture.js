/**
 * Created by MikeVoermans on 20/05/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PictureSchema = new Schema({
    url: String
});

var PictureModel = mongoose.model('Picture', PictureSchema);

PictureSchema.pre('save', function (next) {
    next();
});

module.exports = PictureModel;