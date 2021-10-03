const jokes = require(`give-me-a-joke`);

//console.log(jokes);

jokes.getRandomDadJoke((joke) => {
    console.log(`joke 1 using dad : `);
    console.log(joke);
});