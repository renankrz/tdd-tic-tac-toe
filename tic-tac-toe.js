const initBoard = (size, symbol) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => symbol)
  );
};

const playMove = (board, row, col, symbol) => {
  board[row][col] = symbol;
};

const isGameOver = (board, symbol) => {
  return false;
};

module.exports = {
  initBoard,
  playMove,
  isGameOver,
};
