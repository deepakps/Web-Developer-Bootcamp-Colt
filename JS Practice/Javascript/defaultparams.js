//old way of Default params
// function rollDice(num) {
//     if (num === undefined) {
//         num = 6;
//     }

//     return Math.floor(Math.random() * num) + 1;
// }

//new way of Default params
function rollDice(num = 6) {
    return Math.floor(Math.random() * num) + 1;
}