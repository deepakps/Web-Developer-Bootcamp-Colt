const myReq = new XMLHttpRequest();

myReq.onload = function() {
    console.log(`All done with request!`);
    // console.log(this);
    // console.log(myReq.responseText);
    const resp = JSON.parse(myReq.responseText);
    console.log(resp.ticker.price);
    // console.log(resp);
}

myReq.onerror = function() {
    console.log(`Error occured while processing the request`);
    console.log(this);
}

myReq.open(`get`, `https://api.cryptonator.com/api/full/btc-usd`);
// myReq.open(`get`, `https://api.crypddddtonator.com/api/full/btc-usd`);
myReq.send();