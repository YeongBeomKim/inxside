const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Painting } = require('./Painting');

const PaintingImage = new Schema({
    paintingId: {
        type: Schema.Types.ObjectId,
        ref: Painting
    },
    filename: Schema.Types.String,
    path: Schema.Types.String,
    filesize: {
        type: Schema.Types.Number,
        valide: {
            validator: Number.isInteger, 
            message: `{VALUE} is not an intenger value`
        }
    }
}, {timestamps: true});

module.exports = mongoose.model('PaintingImage', PaintingImage);