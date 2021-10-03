const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    review: {
        body: String,
        rating: Number
    }
});

module.exports = mongoose.model('Review', reviewSchema);