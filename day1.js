export const puzzle1 = (rotations) => {
  let dial = 50;
  let countZeros = 0;

  for (let each in rotations) {
    let rotation = rotations[each];
    let direction = rotation.slice(0, 1);
    let distance = Number(rotation.slice(1));

    if (direction === "R") {
      dial = dial + distance - Math.floor((dial + distance) / 100) * 100;
    }

    if (direction === "L") {
      dial = dial - distance - Math.floor((dial - distance) / 100) * 100;
    }

    if (dial === 0) {
      countZeros += 1;
    }
  }

  return countZeros;
};

export const puzzle2 = (rotations) => {
  let dial = 50;
  let countZeros = 0;

  for (let each in rotations) {
    let rotation = rotations[each];
    let direction = rotation.slice(0, 1);
    let distance = Number(rotation.slice(1));

    if (direction === "R") {
      countZeros += Math.floor((dial + distance) / 100);
      dial = dial + distance - Math.floor((dial + distance) / 100) * 100;
    }

    if (direction === "L") {
      countZeros += Math.floor(distance / 100);
      if (dial - distance + Math.floor(distance / 100) * 100 < 1 && dial > 0) {
        countZeros += 1;
      }
      dial = dial - distance - Math.floor((dial - distance) / 100) * 100;
    }
  }

  return countZeros;
};
