export const puzzle7 = (rows) => {
  let rowLength = rows[0].length + 1;
  let grid = rows.join("|");
  let accesibleRolls = 0;

  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === "@") {
      let adjacentChars =
        grid[i - rowLength - 1] +
        grid[i - rowLength] +
        grid[i - rowLength + 1] +
        grid[i - 1] +
        grid[i + 1] +
        grid[i + rowLength - 1] +
        grid[i + rowLength] +
        grid[i + rowLength + 1];

      if (
        adjacentChars.match(/@/g) === null ||
        adjacentChars.match(/@/g).length < 4
      ) {
        accesibleRolls += 1;
      }
    }
  }

  return accesibleRolls;
};

export const puzzle8 = (rows) => {
  let rowLength = rows[0].length + 1;
  let grid = rows.join("|");
  let accesibleRolls = 0;
  let newGrid = grid;
  let count = 0;

  do {
    count = 0;
    grid = newGrid;

    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === "@") {
        let adjacentChars =
          grid[i - rowLength - 1] +
          grid[i - rowLength] +
          grid[i - rowLength + 1] +
          grid[i - 1] +
          grid[i + 1] +
          grid[i + rowLength - 1] +
          grid[i + rowLength] +
          grid[i + rowLength + 1];

        if (
          adjacentChars.match(/@/g) === null ||
          adjacentChars.match(/@/g).length < 4
        ) {
          newGrid = newGrid.slice(0, i) + "X" + newGrid.slice(i + 1);
          accesibleRolls += 1;
          count += 1;
        }
      }
    }
  } while (count > 0);

  return accesibleRolls;
};
