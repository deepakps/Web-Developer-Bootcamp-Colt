const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();

            if (rand < 0.7) {
                resolve(`Your fake data from : ${url}`);
            } else {
                reject(`Connection timed out!`);
            }
        }, 1000);
    });
}

// fakeRequest('cats.com/page1')
//     .then((data) => {
//         console.log('Done with Request!');
//         console.log(`Response is : ${data}`);
//     })
//     .catch((error) => {
//         console.log(`Error is : ${error}`);
//     });

async function makeTwoRequests() {
    try {
        const data1 = await fakeRequest('balaji.com');
        console.log(`${data1}`);
        const data2 = await fakeRequest('kanyakumari.com');
        console.log(`${data2}`);
    } catch (error) {
        console.log(`Caught fuckin error!`);
        console.log(error);
    }
}

makeTwoRequests();