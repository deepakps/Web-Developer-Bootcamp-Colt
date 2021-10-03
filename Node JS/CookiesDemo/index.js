const express = require('express');
const app = express();

const cookieParcer = require('cookie-parser');
app.use(cookieParcer('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies
    res.send(`Hey there!, ${name}`);
});

app.get('/getsingnedcookie', (req, res) => {
    res.cookie('fruit', 'blackcurrent', { signed: true });
    res.send('Signed your fruit!');
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.cookies);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Mark Henry');
    res.cookie('aqua', 'Harlequin Shrimp');
    res.send('Okay! sent you the cookie');
});

app.listen(3000, () => {
    console.log('Server is listening on 3000!');
});