const { initBoard, playMove } = require("./tic-tac-toe");

test("Generates a board with the correct size", () => {
  const size = 3;
  expect(initBoard(size, " ")).toHaveLength(size);
  expect(initBoard(size, " ")[0]).toHaveLength(size);
});

test("Plays a move", () => {
  const board = initBoard(3, " ");
  const symbol = "X";
  const row = 1;
  const col = 2;
  playMove(board, row, col, symbol);
  expect(board[row][col]).toContain(symbol);
});
