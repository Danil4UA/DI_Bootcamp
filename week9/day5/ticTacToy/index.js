const container = document.getElementById("container");
const buttonX = document.getElementById("x");
const buttonO = document.getElementById("o");

let countMoves = 0;
let availableBlocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player1 = [];
let player2 = [];

const WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const COLORS = {
    player1: "blue",
    player2: "yellow"
};

function createGrid() {
    return `
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    `;
}

function startGame() {
    container.innerHTML = createGrid();
    console.log(container)
    const allBlocks = document.querySelectorAll(".item");
    allBlocks.forEach((block, index) => {
        block.addEventListener("click", () => handleMove(block, index));
    });
}

function handleMove(block, index) {
    if (!availableBlocks.includes(index)) return;

    const currentPlayer = countMoves % 2 === 0 ? player1 : player2;
    const currentColor = countMoves % 2 === 0 ? COLORS.player1 : COLORS.player2;

    makeMove(currentPlayer, block, index, currentColor);

    if (checkWin(currentPlayer)) {
        endGame(currentPlayer);
    } else if (countMoves === 9) {
        endGame(null); // Draw
    }
}

function makeMove(player, block, index, color) {
    block.style.backgroundColor = color;
    player.push(index);
    countMoves++;
    availableBlocks = availableBlocks.filter(block => block !== index);
}

function checkWin(player) {
    return WIN_COMBOS.some(combo => combo.every(index => player.includes(index)));
}


function endGame(player) {
    if (player) {
        alert(`The game is over! ${player === player1 ? "Player 1" : "Player 2"} has won!`);
    } else {
        alert("The game is over! It's a draw!");
    }
    resetGame();
}

function resetGame() {
    container.innerHTML = "";
    countMoves = 0;
    availableBlocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    player1 = [];
    player2 = [];
}

buttonX.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("i was clicked")
    startGame();
});
