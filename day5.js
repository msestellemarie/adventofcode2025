export const puzzle9 = (database) => {
  let ranges = database[0].split("\n");
  let ids = database[1].split("\n");
  let count = 0;

  for (let eachId in ids) {
    for (let each in ranges) {
      let lower = Number(ranges[each].split("-")[0]);
      let upper = Number(ranges[each].split("-")[1]);

      if (Number(ids[eachId]) >= lower && Number(ids[eachId]) <= upper) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

export const puzzle10 = (database) => {
  let ranges = database[0].split("\n");
  let count = 0;

  let uniqueRanges = ranges.filter(
    (range, index) => ranges.indexOf(range) === index,
  );
  let partiallyContainedRanges = uniqueRanges.filter((range, index) => {
    let lower = Number(range.split("-")[0]);
    let upper = Number(range.split("-")[1]);

    let remaining = uniqueRanges
      .slice(0, index)
      .concat(uniqueRanges.slice(index + 1));

    let overlap = remaining.filter((overlap) => {
      let lowerComp = Number(overlap.split("-")[0]);
      let upperComp = Number(overlap.split("-")[1]);

      return !(
        (lowerComp < lower && upperComp < lower) ||
        (lowerComp > upper && upperComp > upper)
      );
    });

    let fullyContained = overlap.filter((range) => {
      let lowerComp = Number(range.split("-")[0]);
      let upperComp = Number(range.split("-")[1]);

      return lower >= lowerComp && upper <= upperComp;
    });

    if (overlap.length === 0) {
      count += upper - lower + 1;
      return false;
    }

    if (overlap.length > 0 && fullyContained.length > 0) {
      return false;
    }

    return true;
  });

  for (let i = 0; i < partiallyContainedRanges.length; i++) {
    let range = partiallyContainedRanges[i];
    let lower = Number(range.split("-")[0]);
    let upper = Number(range.split("-")[1]);
    let remaining = partiallyContainedRanges.slice(i + 1);

    let overlap = remaining.filter((overlap) => {
      let lowerComp = Number(overlap.split("-")[0]);
      let upperComp = Number(overlap.split("-")[1]);

      return !(
        (lowerComp < lower && upperComp < lower) ||
        (lowerComp > upper && upperComp > upper)
      );
    });

    let newLower = lower;
    let newUpper = upper;

    for (let j = 0; j < overlap.length; j++) {
      let lowerComp = Number(overlap[j].split("-")[0]);
      let upperComp = Number(overlap[j].split("-")[1]);

      if (lower > lowerComp && upper > upperComp) {
        newLower = upperComp + 1;
      }

      if (lower < lowerComp && upper < upperComp) {
        newUpper = lowerComp - 1;
      }
    }

    count += newUpper - newLower + 1;
  }

  return count;
};
