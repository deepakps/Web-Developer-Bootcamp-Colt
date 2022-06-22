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
    const camp = new Campgrouond(req.body);

    camp.campground.author = req.user._id;
    console.log(camp);

    await camp.save();
    req.flash('success', 'Successfully created new Campground!');
    res.redirect(`/campgrounds/${camp.id}`);
}));

router.get('/:id', asyncErrorCatch(async(req, res) => {
    const camp = await Campgrouond.findById(req.params.id).populate('campground.reviews').populate('campground.author');

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
    console.log(camp);
    res.render('campgrounds/edit', { camp });
}));

router.put('/:id', isLoggedIn, validateCampground, asyncErrorCatch(async(req, res) => {
    //res.send('It Worked!');
    const { id } = req.params;

    const oldCamp = await Campgrouond.findById(id);

    if (!oldCamp) {
        req.flash('error', 'Cannnot find the Campground!');
        res.redirect(`/campgrounds`);
    } else if (!oldCamp.campground.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to perform this action!');
        res.redirect(`/campgrounds/${id}`);
    } else {
        if (oldCamp.campground.author)
            req.body.campground.author = oldCamp.campground.author;

        if (oldCamp.campground.reviews)
            req.body.campground.reviews = oldCamp.campground.reviews;

        //console.log(req.body);

        const camp = await Campgrouond.findByIdAndUpdate(id, req.body);

        req.flash('success', 'Successfully updated Campground!');
        res.redirect(`/campgrounds/${camp._id}`);
    }
}));

router.delete('/:id', isLoggedIn, asyncErrorCatch(async(req, res) => {
    const { id } = req.params;
    const campgrouond = await Campgrouond.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground!');
    res.redirect(`/campgrounds`);
}));

module.exports = router;