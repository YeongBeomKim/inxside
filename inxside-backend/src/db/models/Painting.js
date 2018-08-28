//@flow
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Painting = new Schema({
    title: String,
    description: String,
    paintingUri: String,
    date: String,
    is_temp: Boolean,
});

Painting.statics.setPainting =  function(id) {
    return this.findById({_id: id}).exec();
};
Painting.statics.setPaintings = function(){
    return this.find({}).exec();
};


module.exports = mongoose.model('Painting',Painting);