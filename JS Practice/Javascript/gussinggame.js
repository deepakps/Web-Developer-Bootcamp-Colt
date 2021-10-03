let maximum = parseInt(prompt("Enter maximum no."));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}
const targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumber);

let attempts = 1;

let guess = parseInt(prompt("Enter your first guess!"));
while (guess !== targetNumber) {
    if (attempts >= 5) {
        console.log("You exceed your level of attempts.");
        break;
    }
    if (guess > targetNumber) {
        guess = parseInt(prompt(`Too High! Enter your guess! attempts remaining ${5 - attempts}`));
    } else if (guess < targetNumber) {
        guess = parseInt(prompt(`Too Low! Enter your guess! attempts remaining ${5 - attempts}`));
    }
    attempts++;
}
if (guess === targetNumber) {
    console.log(`You are obsolutly right! You took ${attempts} attempts to guess correctly.`);
}