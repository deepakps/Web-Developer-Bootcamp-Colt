// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// let animals = ['Lion', 'Tiger', 'Elephant'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i].toUpperCase());
// }

// //nested loop
// for (let i = 0; i < 10; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`       j is ${j}`);
//     }
// }

const seatingChart = [
    ['Deepak', 'Prakash', 'Shinde'],
    ['Snehal', 'Prakash', 'Shinde'],
    ['Prakash', 'Baburao', 'Shinde'],
    ['Sumitra', 'Prakash', 'Shinde'],
    ['Swati', 'Deepak', 'Shinde'],
];

for (let i = 0; i < seatingChart.length; i++) {
    console.log(`Row #${i + 1}`);
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}

for (let chart of seatingChart) {
    for (let detail of chart) {
        console.log(detail);
    }
}