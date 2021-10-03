// let num = 1;

// num = Math.floor(Math.random() * 10) + 1;

// console.log("Before Conditional");

// if (num > 5) {
//     console.log("Random number is greater than 5");
//     console.log(`number is ${num}`);
// }
// if (num < 5) {
//     console.log("Random number is less than 5");
//     console.log(`number is ${num}`);
// }

// if (num % 2 === 0) {
//     console.log("even");
// } else if (num % 2 !== 0) {
//     console.log("odd");
// } else {
//     console.log("There is nothing apart from odd or even!");
// }
// console.log("After Conditional");

//if > else if > else
// let age = parseInt(prompt("Enter your age?"));

// // age = parseInt(age);

// if (age < 5) {
//     console.log("You are baby, you'll get it for free!");
// } else if (age < 10) {
//     console.log("You are child, you need to pay ₹10!");
// } else if (age < 65) {
//     console.log("You are adult, you need to pay ₹50!");
// } else if (age >= 65) {
//     console.log("You are old, you need to pay ₹5!");
// }

//nesting if else
const password = prompt("Please enter password!");

if (password.length >= 6) {
    console.log("Long enough password");
    if (password.indexOf(' ') === -1) {
        console.log("Good Job! No Space!");
    } else {
        console.log("There should not be space in password!");
    }
} else {
    console.log("Short password, password must be 6+ characters!");
}