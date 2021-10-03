const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Oh no error!');
        console.log(err);
    })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', function() {
//     console.log('Connection Open');
// });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const titanic = new Movie({ title: 'Titanic', year: 1998, score: 9.2, rating: 'R' });
// const gladiator = new Movie({ title: 'Gladiator', year: 1999, score: 9.5, rating: 'R' });

// Movie.insertMany([
//         { title: 'Titanic', year: 1998, score: 9.2, rating: 'R' },
//         { title: 'Gladiator', year: 1999, score: 9.5, rating: 'R' },
//         { title: 'Shakespear In Love', year: 1997, score: 9.0, rating: 'R' },
//         { title: 'Saving Private Ryan', year: 1995, score: 9.2, rating: 'R' },
//         { title: 'Shape of Water', year: 2018, score: 9.1, rating: 'PG' },
//         { title: "Schindler's List", year: 1992, score: 9.6, rating: 'R' },
//         { title: 'The Departed', year: 2006, score: 9.5, rating: 'R' },
//         { title: 'Aviator', year: 2004, score: 9.1, rating: 'R' },
//         { title: 'Shutter Island', year: 2010, score: 9.0, rating: 'PG-10' },
//         { title: 'Wolf of Wall Street', year: 2013, score: 9.1, rating: 'R' }
//     ])
//     .then(data => {
//         console.log('It Worked!');
//         console.log(data);
//     });