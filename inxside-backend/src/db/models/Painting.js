//@flow
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Painting = new Schema({
    title: String,
    description: String,
    painting: String,
    date: String
});

module.exports = mongoose.model('Painting',Painting);