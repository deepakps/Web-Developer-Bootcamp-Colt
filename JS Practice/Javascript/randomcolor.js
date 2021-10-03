const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').innerText = `Welcome! New color is ${newColor}`;
});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}