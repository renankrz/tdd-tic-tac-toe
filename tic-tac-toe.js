const initBoard = (size, symbol) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => symbol)
  );
};

const playMove = (board, row, col, symbol) => {
  board[row][col] = symbol;
};

const isGameOver = (board, symbol) => {
  const rowsScore = new Array(board.length).fill(0);
  const colsScore = new Array(board.length).fill(0);
  let mainDiagonalScore = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === symbol) {
        rowsScore[row]++;
        colsScore[col]++;
        if (row === col) {
          mainDiagonalScore++;
        }
      }
    }
  }

  if (
    rowsScore.includes(board.length) ||
    colsScore.includes(board.length) ||
    mainDiagonalScore === board.length
  ) {
    return true;
  }

  return false;
};

module.exports = {
  initBoard,
  playMove,
  isGameOver,
};
