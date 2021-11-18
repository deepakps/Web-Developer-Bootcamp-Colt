const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const Joi = require('joi');
const Campgrouond = require('./models/campground');
const Review = require('./models/review');
const { validate } = require('./models/campground');

const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connections error:'));
db.once('open', () => {
    console.log('Database connected!');
})
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    secret: 'thisshouldbebettersecret!',
    resave: false,
    saveUninitialized: true,
    httpOnly: true,
    cookie: {
        expires: Date.now() + (1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);

app.get('/', (req, res) => {
    res.render('home');
});

// app.get('/makecampground', async(req, res) => {
//     const camp = new Campgrouond({ title: 'My Backyard', description: 'Cheap Camping' });
//     await camp.save();
//     res.send(camp);
// });

app.all('*', (req, res, next) => {
    next(new ExpressError('404', 'Page does not found!'));
})

app.use((err, req, res, next) => {
    const { statusCode = '500' } = err;
    if (!err.message) err.message = 'Oops! Something went wrong!';
    res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});