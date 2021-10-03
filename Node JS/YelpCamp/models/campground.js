const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    campground: {
        title: String,
        image: String,
        price: Number,
        description: String,
        location: String,
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }]
    }
});

CampgroundSchema.post('findOneAndDelete', async function(doc) {
    console.log('camp', doc);
    console.log('review', doc.campground.reviews);
    if (doc) {
        await Review.remove({
            _id: {
                $in: doc.campground.reviews
            }
        });
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema);