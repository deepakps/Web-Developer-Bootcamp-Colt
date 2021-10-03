const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongo connection open!');
    })
    .catch(err => {
        console.log('Oh no Mongo connection error!');
        console.log(err);
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

app.get('/', (req, res) => {
    res.send('This is the Home Page!');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        res.send('This is secret! You cannot see me unless you are logged!');
    }
});

app.post('/register', async(req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validUser = await bcrypt.compare(password, user.password);

    if (validUser) {
        req.session.user_id = user._id;
        res.redirect('/secret');
    } else {
        res.send(`Please try again ${user.username}!`);
    }
});

app.listen(3000, () => {
    console.log('Server is listening on 3000 port!');
});