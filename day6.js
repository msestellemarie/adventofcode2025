export const puzzle11 = (input) => {
  let problems = input.map((str) => str.match(/[0-9*+]+/g));
  let count = 0;

  for (let i = problems[0].length - 1; i > -1; i--) {
    let total = 0;
    let operator = "";

    for (let j = problems.length - 1; j > -1; j--) {
      if (j === problems.length - 1) {
        operator = problems[j][i];
      } else if (total === 0) {
        total += Number(problems[j][i]);
      } else if (operator === "*") {
        total *= Number(problems[j][i]);
      } else {
        total += Number(problems[j][i]);
      }
    }

    count += total;
  }

  return count;
};

export const puzzle12 = (input) => {
  let operators = input.slice(input.length - 1)[0].match(/[0-9*+]+/g);
  let regexStr = new RegExp(
    input
      .pop()
      .match(/\s+/g)
      .map((v, i) =>
        i === operators.length - 1
          ? `(.{${v.length + 1}})`
          : `(.{${v.length}})`,
      )
      .join("\\s"),
  );
  let problems = input.map((str) => {
    return str.match(regexStr).slice(1, operators.length + 1);
  });
  let count = 0;

  for (let i = 0; i < problems[0].length; i++) {
    let operator = operators[i];
    let total = 0;

    for (let j = 0; j < problems[0][i].length; j++) {
      let num = "";

      for (let k = 0; k < problems.length; k++) {
        num += problems[k][i][problems[k][i].length - j - 1];
      }

      if (total === 0) {
        total += Number(num);
      } else if (operator === "*") {
        total *= Number(num);
      } else {
        total += Number(num);
      }
    }

    count += total;
  }

  return count;
};
