const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('current-player');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = cell.getAttribute('data-index');

    if (cell.innerText !== "" || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    if (checkWinner()) {
        currentPlayerDisplay.innerText = `Player ${currentPlayer} Wins! ✨`;
        gameActive = false;
        createConfetti();
        return;
    }

    if (!gameState.includes("")) {
        currentPlayerDisplay.innerText = "Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.innerText = currentPlayer;
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            cells[a].classList.add('winner');
            cells[b].classList.add('winner');
            cells[c].classList.add('winner');
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    currentPlayerDisplay.innerText = 'X';
    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('x', 'o', 'winner');
    });
    
    // Remove existing confetti
    const oldConfetti = document.querySelectorAll('.confetti');
    oldConfetti.forEach(c => c.remove());
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
