const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    places: {
        type: Number,
        required: true,
    },
    cityBooked: {
        type: String,
        required: true
    }
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;