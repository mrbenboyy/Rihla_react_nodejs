const express = require("express");
const router = express.Router();
const bookingController = require("../Controllers/bookingsController");


router.get("/bookings", bookingController.getAllBookings);
router.post("/bookings", bookingController.addBooking);
router.put("/bookings/:id", bookingController.updateBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);

module.exports=router;