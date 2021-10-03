//AND
// let password = prompt("Please enter password : ");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password");
// } else {
//     console.log("Invalid Password");
// }

//OR
// let age = parseInt(prompt("Please enter age : "));

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free!");
// } else if (age >= 5 && age < 10) {
//     console.log("₹10");
// } else if (age >= 10 && age < 65) {
//     console.log("₹20");
// } else {
//     console.log("Invalid age.");
// }

//NOT
let age = parseInt(prompt("Please enter age : "));

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("you are not a baby!");
}