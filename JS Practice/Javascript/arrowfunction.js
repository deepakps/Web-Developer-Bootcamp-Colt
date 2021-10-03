const square = (num) => {
    return num * num;
}

//explicit return
// const rollDice = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

//1- implicit return
// const rollDice = () => (
//     Math.floor(Math.random() * 6) + 1
// )

//2- implicit return
const rollDice = () => Math.floor(Math.random() * 6) + 1;

const greet = (name) => {
    return `Hey ${name}!`;
}

const movieList = [{
        title: 'Titanic',
        score: 98
    },
    {
        title: 'Gladiator',
        score: 99
    },
    {
        title: 'Lagaan',
        score: 91
    },
    {
        title: 'A Beatiful Mind',
        score: 87
    },
    {
        title: 'Avatar',
        score: 76
    },
    {
        title: 'Forrest Gump',
        score: 89
    }
];

//explicit return
// const movieScores = movieList.map(function(movies) {
//     return `${movies.title} - ${movies.score / 10}`;
// })

//1- implicit return
// const movieScores = movieList.map((movies) => (
//     `${movies.title} - ${movies.score / 10}`
// ))

//2- implicit return
const movieScores = movieList.map((movies) => `${movies.title} - ${movies.score / 10}`)

//reduce example
const highestRated = movieList.reduce((bestMovie, currentMovie) => {
    if (bestMovie.score > currentMovie.score) {
        return bestMovie;
    }
    return currentMovie;
})