// const { axios } = require("./axios.min");

// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => console.log(`${res.data.ticker.price}`))
//     .catch(err => console.log(`${err}`));

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd');

//         console.log(`${res.data.ticker.price}`);
//     } catch (error) {
//         console.log(`Error : ${error}`);
//     }
// }

// fetchBitcoinPrice();

//getDadJoke

const jokes = document.querySelector(`#jockes`);
const btnJoke = document.querySelector('#btnJoke');

const getDadJoke = async() => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhalzdadjoke.com/', config);

        return res.data.joke;
    } catch (e) {
        return `Sorry, no jokes available. GO TO HELL! FUCK OFF!`;
    }
}

const addNewJoke = async() => {
    const joke = await getDadJoke();

    // console.log(joke);
    const newLi = document.createElement(`li`);
    newLi.append(joke);
    jokes.append(newLi);
}

btnJoke.addEventListener('click', addNewJoke);