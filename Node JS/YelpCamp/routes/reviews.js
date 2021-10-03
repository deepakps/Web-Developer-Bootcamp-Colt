const express = require('express');
const router = express.Router({ mergeParams: true });

const Campgrouond = require('../models/campground');
const Review = require('../models/review');

const { reviewSchema } = require('../utils/clientSideSchemas.js');

const asyncErrorCatch = require('../utils/asyncErrorCatch');

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    // console.log(error);
    if (error) {
        const message = error.details.map(er => er.message).join(',');

        throw new ExpressError(400, message);
    } else {
        next();
    }
}

router.post('/', validateReview, asyncErrorCatch(async(req, res) => {
    const camp = await Campgrouond.findById(req.params.id);
    const review = new Review(req.body);
    // console.log(req.params);
    camp.campground.reviews.push(review);
    await review.save();
    await camp.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/campgrounds/${camp._id}`);
}));

router.delete('/:reviewId', asyncErrorCatch(async(req, res) => {
    const { id, reviewId } = req.params;
    await Campgrouond.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review!');
    res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;