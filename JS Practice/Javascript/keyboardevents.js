const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

//1 way
// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = makeRandomColor();
//         button.style.color = makeRandomColor();
//     })
// }

// const h1s = document.querySelectorAll('h1');

// for (let h1 of h1s) {
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = makeRandomColor();
//         h1.style.color = makeRandomColor();
//     })
// }

//2nd way
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorise);
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorise);
}

function colorise() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}