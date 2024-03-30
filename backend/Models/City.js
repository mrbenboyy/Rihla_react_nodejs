const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    map: String
});

const City = mongoose.model("City", citySchema);

module.exports = City;