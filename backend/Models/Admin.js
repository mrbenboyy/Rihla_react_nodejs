const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;