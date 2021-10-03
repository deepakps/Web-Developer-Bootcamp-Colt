const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

function scream() {
    console.log('Ohhhh fuck yeaaahhhh!');
    console.log('fuck it faster YOU BITCH.')
}

function twist() {
    console.log('Twist');
}

function shout() {
    console.log('shout');
}

btn2.ondblclick = () => {
    console.log('You double clicked me!');
    console.log('I hope it did work.');
};

btn2.onmouseenter = scream;

document.querySelector('h1').onclick = () => alert('I am H1');

btn3.addEventListener('click', () => {
    alert('Using addEventListner');
});

btn4.addEventListener('click', twist, { once: true });
btn4.addEventListener('click', shout);

const helloBtn = document.querySelector('#hello');
helloBtn.addEventListener('click', () => {
    console.log('hello');
});

const goodbyeBtn = document.querySelector('#goodbye');
goodbyeBtn.addEventListener('click', () => {
    console.log('goodbyeBtn');
});