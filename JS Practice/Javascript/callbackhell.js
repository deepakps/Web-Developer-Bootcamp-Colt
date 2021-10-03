// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';

//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';

//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';

//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';

//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';

//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';

//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'voilet';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// function delayedColorChange(newColor, delay, doNext) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay);
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('#4b0082', 1000, () => {
//                         delayedColorChange('#EE82EE', 1000);
//                     });
//                 });
//             });
//         });
//     });
// });

//Using Promise
const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    });
};

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('#4b0082', 1000))
//     .then(() => delayedColorChange('#ee82ee', 1000));

async function rainbow() {
    await delayedColorChange('red', 1000);
    console.log(`break`);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('#4b0082', 1000);
    await delayedColorChange('#ee82ee', 1000);
}

// rainbow()
//     .then(() => console.log(`End of Rainbow!`));

async function printRainbow() {
    await rainbow();
    console.log(`End of Rainbow!`);
}

printRainbow();