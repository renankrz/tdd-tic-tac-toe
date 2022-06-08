const { initBoard } = require("./tic-tac-toe");

test("Generates a board with the correct size", () => {
  const size = 3;
  expect(initBoard(size, " ")).toHaveLength(size);
  expect(initBoard(size, " ")[0]).toHaveLength(size);
});
