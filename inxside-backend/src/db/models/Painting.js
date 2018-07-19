//@flow
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Painting = new Schema({
    title: String,
    description: String,
    paintingUri: String,
    date: String
});

Painting.statics.setPainting =  function(id) {
    return this.findById({_id: id}).exec();
};
Painting.statics.setPaintings = function(){
    this.find({},function(err,paintings){
        paintings.reduce(function(paintingMap, item){
            paintingMap[item.id] = item;
            return paintingMap;
        },{});
    });
}


module.exports = mongoose.model('Painting',Painting);