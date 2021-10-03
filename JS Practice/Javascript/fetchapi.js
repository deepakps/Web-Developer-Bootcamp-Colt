// const fetchAPI = fetch(`https://api.cryptonator.com/api/full/btc-usd`);

// // console.log(fetchAPI);

// fetchAPI
//     .then(res => {
//         console.log(`Parsing the data ${res}`);
//         return res.json();
//     })
//     .then(data => {
//         console.log(`Data parsed : ${data}`);
//         console.log(data);
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log(`Failure!`);
//         console.log(e);
//     });

// console.log(fetchAPI);

const fetchBitcoinPrice = async() => {
    try {
        const res = await fetch(`https://api.cryptodnator.com/api/full/btc-usd`)
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log(`error occured : ${e}`);
    }
}

fetchBitcoinPrice();