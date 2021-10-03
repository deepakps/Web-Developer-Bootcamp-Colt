const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

let comments = [{
        id: uuid(),
        username: 'Hank',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Walter',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'Plz delete you account, Walt!'
    },
    {
        id: uuid(),
        username: 'Jessie',
        comment: 'This is what you have done, Mr. White?'
    },
];

//C
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;

    if (username && comment) {
        comments.push({ username, comment, id: uuid() });
        res.redirect('/comments');
    } else {
        res.redirect('/comments/new');
    }
});

//R
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

//U
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

//E
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    res.render('comments/edit', { foundComment });
});

//D
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.render('comments/index', { comments });
});

app.listen(3000, () => {
    console.log('Server is listening on the 3000 PORT!');
});

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
    // console.log(req.body);
    const { name, breed, meat, qty } = req.body;
    res.send(`All right! here is your ${qty} ${meat} tacos!`);
});