const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timed out! :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay < 4000) {
                reject('Connection Timed out! :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}

// fakeRequestCallback('bookings.com/page1', function(response) {
//     console.log('It Worked!');
//     console.log(response);
//     fakeRequestCallback('bookings.com/page2', function(response) {
//         console.log('It Worked! 2nd Req');
//         console.log(response);

//         fakeRequestCallback('bookings.com/page3', function(response) {
//             console.log('It Worked! 3rd Req');
//             console.log(response);
//         }, function(response) {
//             console.log('Error! :( 3rd Req');
//             console.log(response);
//         });
//     }, function(response) {
//         console.log('Error! :( 2nd Req');
//         console.log(response);
//     });
// }, function(response) {
//     console.log('Error! :(');
//     console.log(response);
// });

// fakeRequestPromise('choc-o-lot.com/page1')
//     .then(() => {
//         console.log('It Worked! Page 1');
//         fakeRequestPromise('choc-o-lot.com/page2')
//             .then(() => {
//                 console.log('It Worked! Page 2');

//                 fakeRequestPromise('choc-o-lot.com/page3')
//                     .then(() => {
//                         console.log('It Worked! Page 3');
//                     })
//                     .catch(() => {
//                         console.log('Error! :( Page 3');
//                     });
//             })
//             .catch(() => {
//                 console.log('Error! :( Page 2');
//             });
//     })
//     .catch(() => {
//         console.log('Error! :( Page 1');
//     });

fakeRequestPromise('choc-o-lot.com/page1')
    .then((data) => {
        console.log('It Worked! Page 1');
        console.log(data);
        return fakeRequestPromise('choc-o-lot.com/page2')
    })
    .then((data) => {
        console.log('It Worked! Page 2');
        console.log(data);
        return fakeRequestPromise('choc-o-lot.com/page3')
    })
    .then((data) => {
        console.log('It Worked! Page 3');
        console.log(data);
    })
    .catch((error) => {
        console.log('Error! :(');
        console.log(error);
    });