const jokes = require("give-me-a-joke");

const colors = require("colors");

console.log('Hello'.green);
jokes.getRandomDadJoke((joke) => {
    console.log(`joke 1 using dad : `);
    console.log(joke.rainbow);
});