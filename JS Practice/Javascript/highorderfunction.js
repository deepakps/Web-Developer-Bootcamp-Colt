// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(func) {
//     for (let i = 0; i < 10; i++) {
//         func();
//     }
// }

// function rollDice() {
//     const roll = Math.floor((Math.random() * 10)) + 1;
//     console.log(roll);
// }

// callTwice(rollDice);

//Return functions
// function makeMysteryFunction() {
//     const rand = Math.random();

//     if (rand > 0.5) {
//         return function() {
//             console.log("Congradulations, I'm a good function.");
//             console.log("You have won million dollors.");
//         }
//     } else {
//         return function() {
//             alert("You have been infected by computer virus!");
//             alert("Stop trying to close the window!");
//             alert("Stop trying to close the window!");
//             alert("Stop trying to close the window!");
//             alert("Stop trying to close the window!");
//         }
//     }
// }

//Factory Function
function makeBetweenFunction(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}