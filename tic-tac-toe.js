const initBoard = (size, symbol) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => symbol)
  );
};

module.exports = {
  initBoard,
};
