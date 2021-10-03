const express = require('express');
const app = express();
const morgan = require('morgan');
const appError = require('./AppError');

// app.use(() => {
//     console.log("Hello!");
// });

app.use(morgan('tiny'));
// app.use(morgan('dev'));
// app.use(morgan('common'));
app.use((req, res, next) => {
    //req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs');
    next();
});

// app.use('/secret', (req, res, next) => {
//     const { password } = req.query;
//     if (password === 'chickennuggets') {
//         next();
//     }
//     res.send('You need a password to proceed further!');
// });

var verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennuggets') {
        next();
    }
    // res.send('You need a password to proceed further!');
    // res.status(401);
    // throw new Error('You need a password to proceed further!');
    throw new appError(401, 'You need a password to proceed further!');
});

// app.use((req, res, next) => {
//     //res.send('Hijacked by App.use!');
//     console.log('This is my first middleware');
//     return next();
//     console.log('This is my first middleware - After calling Next()');
// });

// app.use((req, res, next) => {
//     //res.send('Hijacked by App.use!');
//     console.log('This is my second middleware');
//     return next();
// });

// app.use((req, res, next) => {
//     //res.send('Hijacked by App.use!');
//     console.log('This is my third middleware');
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Home Page!');
});

//error handling demo
app.get('/error', (req, res) => {
    chicken.fly();
});

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Bhow Bhow!');
});

app.get('/secret', verifyPassword, (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send(`My secret is : I want to be director and win the OSCARS!`);
});

app.get('/admin', (req, res) => {
    throw new appError(403, 'You are not an Admin!');
});

app.use((req, res) => {
    // res.send('Not Found!');
    res.status(404).send('Not Found!');
});

// app.use((err, req, res, next) => {
//     console.log('****************************************************');
//     console.log('***********************Error************************');
//     console.log('****************************************************');
//     // res.send(500).send('Oh boy! we got an error!');
//     console.log(err);
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});