const { initBoard, playMove, isGameOver } = require("./tic-tac-toe");

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

test("Doesn't point a winner when there isn't one", () => {
  let board = initBoard(3, "_");
  const symbol = "X";
  playMove(board, 0, 0, symbol);
  expect(isGameOver(board, symbol)).toBe(false);
});

test("Points winner in a row", () => {
  let board = initBoard(3, "_");
  const symbol = "X";
  playMove(board, 0, 0, symbol);
  playMove(board, 0, 1, symbol);
  playMove(board, 0, 2, symbol);
  expect(isGameOver(board, symbol)).toBe(true);
});
