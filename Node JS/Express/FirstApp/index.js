const express = require('express');

const app = express();

// app.use((req, res) => {
//     // console.log('We got a new request!');

//     // console.log(req);
//     // res.send({ color: 'black' });
//     // res.send(`<h1> This is my 1 st express attempt </h1>`);
//     res.send('Hello, we have got your request. Here is the respoonse!');
// })

app.get('/', (req, res) => {
    res.send(`<h2>Welcome to my Home Page!</h2>`);
});

app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params);
    const { subreddit } = req.params;
    // res.send(`This is my sub reddit!`);
    res.send(`<h2>Browsing the ${subreddit} subreddit!</h2>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h2>Viewing Post ID ${postId} for ${subreddit} subreddit!</h2>`);
});

app.post('/cats', (req, res) => {
    res.send(`Meoowww!`);
});

app.get('/cats', (req, res) => {
    res.send(`Meoowww!`);
});

app.get('/dogs', (req, res) => {
    res.send(`Bhaowww!`);
});

app.get('/search', (req, res) => {
    // console.log(req.query);
    // res.send('Hi!');
    const { q } = req.query;
    if (!q) {
        res.send(`Nothing is found, is nothing is searched!`);
    } else {
        res.send(`<h1>Your query param is ${q}</h1>`);
        //res.send(req.query);
    }
});

app.get('*', (req, res) => {
    res.send(`I don't know that path! Probably 404`);
});

//console.dir(app);
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});