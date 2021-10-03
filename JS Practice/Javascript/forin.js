let testScores = {
    Deepak: 100,
    Pushkar: 89,
    Venky: 84,
    Mani: 101,
    Pankaj: 90,
    Vijay: 91
}

// for (let score in testScores) {
//     console.log(score);
//     // console.log(`${score} has scored : ${testScores.score}`);
//     console.log(`${score} has scored : ${testScores[score]}`);
// }

let total = 0;
for (let score of Object.values(testScores)) {
    // total = total + score;
    total += score;
    console.log(`${score}`);
}
console.log(total);