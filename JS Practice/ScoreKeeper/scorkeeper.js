const player1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score: 0
};

const player2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score: 0
};

const resetButton = document.querySelector('#reset');
const winningScoreToSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

player1.button.addEventListener('click', () => {
    updateScore(player1, player2);
});

player2.button.addEventListener('click', () => {
    updateScore(player2, player1);
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;

            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

resetButton.addEventListener('click', reset);

winningScoreToSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

function reset() {
    isGameOver = false;

    for (let player of[player1, player2]) {
        player.score = 0;
        player.display.textContent = player.score;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
    // player1.score = 0;
    // player2.score = 0;
    // isGameOver = false;

    // player1.display.textContent = player1.score;
    // player2.display.textContent = player2.score;

    // player1.display.classList.remove('has-text-success', 'has-text-danger');
    // player2.display.classList.remove('has-text-success', 'has-text-danger');

    // player1.button.disabled = false;
    // player2.button.disabled = false;

    // p1Display.classList.add('idle');
    // p2Display.classList.add('idle');
}