const express = require('express');
const router = express.Router();
const asyncErrorCatch = require('../utils/asyncErrorCatch');
const ExpressError = require('../utils/ExpressError');
const Campgrouond = require('../models/campground');
const { campgroundSchema } = require('../utils/clientSideSchemas.js');
const { isLoggedIn } = require('../middleware');

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const message = error.details.map(er => er.message).join(',');

        throw new ExpressError(400, message);
    } else {
        next();
    }
}

router.get('/', asyncErrorCatch(async(req, res) => {
    const campgrounds = await Campgrouond.find({});
    res.render('campgrounds/index', { campgrounds });
}));

router.get('/new', isLoggedIn, (req, res) => {
    //const campground = await Campgrouond.findById(req.params.id);
    res.render('campgrounds/new');
});

router.post('/', isLoggedIn, validateCampground, asyncErrorCatch(async(req, res, next) => {
    // if (!req.body.campground) throw new ExpressError('400', 'Invalid Campground Data!');
    const campground = new Campgrouond(req.body);

    await campground.save();
    req.flash('success', 'Successfully created new Campground!');
    res.redirect(`/campgrounds/${campground.id}`);
}));

router.get('/:id', asyncErrorCatch(async(req, res) => {
    const camp = await Campgrouond.findById(req.params.id).populate('campground.reviews');
    // console.log(camp.campground.reviews);
    if (!camp) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { camp });
}));

router.get('/:id/edit', isLoggedIn, asyncErrorCatch(async(req, res) => {
    const camp = await Campgrouond.findById(req.params.id);
    if (!camp) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { camp });
}));

router.put('/:id', isLoggedIn, validateCampground, asyncErrorCatch(async(req, res) => {
    //res.send('It Worked!');
    const { id } = req.params;

    const camp = await Campgrouond.findByIdAndUpdate(id, req.body);
    req.flash('success', 'Successfully updated Campground!');
    res.redirect(`/campgrounds/${camp._id}`);
}));

router.delete('/:id', isLoggedIn, asyncErrorCatch(async(req, res) => {
    const { id } = req.params;
    const campgrouond = await Campgrouond.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground!');
    res.redirect(`/campgrounds`);
}));

module.exports = router;