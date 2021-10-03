const btnRoll = document.querySelector('#roll');

const rollRandom = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const displayDice = () => {
    const randDice = rollRandom();

    console.log(randDice);

    const s1 = document.querySelector('#s1');
    const s2 = document.querySelector('#s2');
    const s3 = document.querySelector('#s3');
    const s4 = document.querySelector('#s4');
    const s5 = document.querySelector('#s5');
    const s6 = document.querySelector('#s6');

    if (randDice === 1) {
        s1.innerText = '.';
        s2.innerText = '';
        s3.innerText = '';
        s4.innerText = '';
        s5.innerText = '';
        s6.innerText = '';
    } else if (randDice === 2) {
        s1.innerText = '.';
        s2.innerText = '.';
        s3.innerText = '';
        s4.innerText = '';
        s5.innerText = '';
        s6.innerText = '';
    } else if (randDice === 3) {
        s1.innerText = '.';
        s2.innerText = '.';
        s3.innerText = '.';
        s4.innerText = '';
        s5.innerText = '';
        s6.innerText = '';
    } else if (randDice === 4) {
        s1.innerText = '.';
        s2.innerText = '.';
        s3.innerText = '.';
        s4.innerText = '.';
        s5.innerText = '';
        s6.innerText = '';
    } else if (randDice === 5) {
        s1.innerText = '.';
        s2.innerText = '.';
        s3.innerText = '.';
        s4.innerText = '.';
        s5.innerText = '.';
        s6.innerText = '';
    } else {
        s1.innerText = '.';
        s2.innerText = '.';
        s3.innerText = '.';
        s4.innerText = '.';
        s5.innerText = '.';
        s6.innerText = '.';
    }
}

btnRoll.addEventListener('click', displayDice);