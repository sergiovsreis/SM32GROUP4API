var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TokenSchema = new Schema({
    token: String,
    ip: String,
    member : { type: Schema.Types.ObjectId, ref: 'Member' }//,
    //createdAt: { type: Date/*, expires: 60*/, default: Date.now } //Commented out because you will need to relog every x seconds
});

module.exports = mongoose.model('tokens', TokenSchema);