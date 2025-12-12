const findMax = (str) => {
  let index = 0;
  let max = 0;

  for (let char in str) {
    if (Number(str[char]) > max) {
      max = Number(str[char]);
      index = Number(char);
    }
  }

  return { index, max };
};

export const puzzle5 = (banks) => {
  let voltageSum = 0;

  for (let each in banks) {
    let bank = banks[each];
    let firstBattery = findMax(bank.slice(0, bank.length - 1));
    let secondBattery = findMax(bank.slice(firstBattery.index + 1));

    voltageSum += firstBattery.max * 10 + secondBattery.max;
  }

  return voltageSum;
};

export const puzzle6 = (banks) => {
  let voltageSum = 0;

  for (let each in banks) {
    let bank = banks[each];
    let voltageArr = [];
    let index = 0;

    for (let i = 1; i < bank.length; i++) {
      let curr = findMax(bank.slice(index, bank.length - 12 + i));
      voltageArr.push(curr.max);
      index += curr.index + 1;
      if (voltageArr.length === 12) {
        break;
      }
    }

    voltageSum += Number(voltageArr.join(""));
  }

  return voltageSum;
};
