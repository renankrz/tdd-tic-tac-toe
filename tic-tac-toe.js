const initBoard = (size, symbol) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => symbol)
  );
};

const playMove = (board, row, col, symbol) => {
  board[row][col] = symbol;
};

module.exports = {
  initBoard,
  playMove,
};
