let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "";
let computerPlayer = "";
let gameOver = false;
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

function chooseSymbol(symbol) {
  currentPlayer = symbol;
  computerPlayer = symbol === "X" ? "O" : "X";
  document.getElementById('choice').style.display = 'none';
  document.getElementById('board').style.display = 'block';
}

function makeMove(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    document.getElementById(index).innerText = currentPlayer;
    checkWinner();
    if (!gameOver) {
      computerTurn();
    }
  }
}

function computerTurn() {
  let availableSpots = board.map((val, idx) => val === "" ? idx : null).filter(val => val !== null);
  if (availableSpots.length > 0) {
    let randomIndex = availableSpots[Math.floor(Math.random() * availableSpots.length)];
    board[randomIndex] = computerPlayer;
    document.getElementById(randomIndex).innerText = computerPlayer;
    checkWinner();
  }
}

function checkWinner() {
  for (let combo of winCombos) {
    let [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('status').innerText = `${board[a]} wins!`;
      document.getElementById('status').style.display = 'block';
      document.getElementById('restart').style.display = 'block';
      gameOver = true;
      return;
    }
  }

  if (!board.includes("")) {
    document.getElementById('status').innerText = "It's a tie!";
    document.getElementById('status').style.display = 'block';
    document.getElementById('restart').style.display = 'block';
    gameOver = true;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.box').forEach(box => box.innerText = "");
  document.getElementById('status').style.display = 'none';
  document.getElementById('restart').style.display = 'none';
  document.getElementById('board').style.display = 'none';
  document.getElementById('choice').style.display = 'block';
  gameOver = false;
}