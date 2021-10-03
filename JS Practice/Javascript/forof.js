let animals = ['Lion', 'Tiger', 'Girrafe', 'Crocodile', 'Monkey', 'Snake', 'Python', 'Dragon'];

// console.log('Print with normal for');
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

console.log('Print with for of');
for (let animal of animals) {
    console.log(animal);
}

console.log("Iterating through objects!");
for (let str of "I'm the King!") {
    console.log(str);
}