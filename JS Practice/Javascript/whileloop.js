// let count = 0;
// while (count < 10) {
//     console.log(count++);
// }

let secret = prompt("Enter secret code :");

while (true) {
    if (secret === "Leo") {
        secret = prompt(secret);
        console.log("Here you are! Congradulations!");
        break;
    }
}