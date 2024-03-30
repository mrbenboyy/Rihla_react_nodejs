const Booking = require("../Models/Booking");

async function getAllBookings(req, res){
    try{
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    }catch(error){
    }
}

async function addBooking(req, res){
    try{
        const b = req.body;
        Booking.create(b);
        const bookings = await Booking.find();
        res.json(bookings)
    }catch{
        res.status(500).send("erreur dans le serveur.")
    }
}

async function updateBooking(req, res){
    const idP = req.params.id;
    const b = req.body
    await Booking.findByIdAndUpdate(idP, b);
    const bookings = await Booking.find();
    res.json(bookings);
    
}

async function deleteBooking(req, res){
    const idP = req.params.id;
    await Booking.findByIdAndDelete(idP);
    const bookings = await Booking.find();
    res.json(bookings);
}

module.exports={getAllBookings, addBooking, deleteBooking, updateBooking};