/**
 * Created by Sergio Reis on 29-04-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
    checkIn: Date,
    checkOut: Date,
    member : { type: Schema.Types.ObjectId, ref: 'Member' },
    statusIn: String
});

var AttendanceModel = mongoose.model('Attendance', AttendanceSchema);

AttendanceSchema.pre('save', function (next) {

    var self = this;
    var checkInCount = AttendanceModel.count({member : self.member, status: 'checkIn' });

    if(checkInCount == 1)
    {
        console.log('User is not checked out.');
        next(new Error("User is not checked out."));

        //return next(new Error('Er na '));
    }
    next();
});


AttendanceSchema.pre('update', function (next) {
    next();
});






module.exports = AttendanceModel;