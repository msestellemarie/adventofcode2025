export const puzzle3 = (ranges) => {
  let invalidIdsSum = 0;

  for (let each in ranges) {
    let range = ranges[each];
    let arr = range.split("-");
    let lower = Number(arr[0]);
    let upper = Number(arr[1]);

    for (let i = lower; i < upper + 1; i++) {
      if (i.toString().length % 2 == 0) {
        let start = i.toString().slice(0, i.toString().length / 2);
        let end = i.toString().slice(i.toString().length / 2);

        if (start === end) {
          invalidIdsSum += i;
        }
      }
    }
  }

  return invalidIdsSum;
};

export const puzzle4 = (ranges) => {
  let invalidIdsSum = 0;

  for (let each in ranges) {
    let range = ranges[each];
    let arr = range.split("-");
    let lower = Number(arr[0]);
    let upper = Number(arr[1]);

    for (let i = lower; i < upper + 1; i++) {
      for (let j = 1; j < i.toString().length; j++) {
        if (i.toString().length % j === 0) {
          let start = i.toString().slice(0, j);
          let count = 0;

          for (let k = 0; k < i.toString().length / j; k++) {
            let end = i.toString().slice(j * k, j + j * k);

            if (start === end) {
              count += 1;
            }

            start = end;
          }

          if (count === i.toString().length / j) {
            invalidIdsSum += i;
            break;
          }
        }
      }
    }
  }

  return invalidIdsSum;
};
