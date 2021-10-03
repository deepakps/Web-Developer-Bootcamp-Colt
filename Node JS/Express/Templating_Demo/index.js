const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
    // res.send('Hi');
    res.render('home');
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random', { test: num });
    res.render('random', { num });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
});

// const num = 3;
// if (num % 2 === 0) {
//     console.log('Even');
// } else {
//     console.log('odd');
// }

app.get('/cats', (req, res) => {
    const cats = ['Mona', 'Jyoti', 'Aradhana', 'Survi', 'Snehal', 'Shilpa', 'Sana'];

    res.render('cats', { cats });
});