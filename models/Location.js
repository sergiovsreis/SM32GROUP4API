/**
 * Created by MikeVoermans on 12-05-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    lng: Number,
    lat: Number,
    member: { type: Schema.Types.ObjectId, ref: 'Member' }
});

module.exports = mongoose.model('Location', LocationSchema);