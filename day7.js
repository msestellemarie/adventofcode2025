export const puzzle13 = (input) => {
  let count = 0;
  let paths = [[input[0].indexOf("S")]];

  for (let i = 1; i < input.length; i++) {
    let prev = paths[i - 1];
    let next = [];

    for (let j = 0; j < prev.length; j++) {
      if (input[i][prev[j]] === "^") {
        next.indexOf(prev[j] - 1) === -1 && next.push(prev[j] - 1);
        next.indexOf(prev[j] + 1) === -1 && next.push(prev[j] + 1);
        count += 1;
      } else {
        next.indexOf(prev[j]) === -1 && next.push(prev[j]);
      }
    }

    paths.push(next);
  }

  return count;
};

export const puzzle14 = (input) => {
  let prev = {
    [input[0].indexOf("S")]: 1,
  };
  let totalPaths = 0;

  for (let i = 1; i < input.length; i++) {
    let next = {};

    for (let each in prev) {
      let col = Number(each);
      let count = prev[each];

      if (i === input.length - 1) {
        totalPaths += count;
      }

      if (input[i][col] === "^") {
        next[col - 1]
          ? (next[col - 1] = next[col - 1] + count)
          : (next[col - 1] = count);
        next[col + 1]
          ? (next[col + 1] = next[col + 1] + count)
          : (next[col + 1] = count);
      } else {
        next[col] ? (next[col] = next[col] + count) : (next[col] = count);
      }
    }

    prev = next;
  }

  return totalPaths;
};
