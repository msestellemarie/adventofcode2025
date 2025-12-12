import { readFileSync } from "node:fs";
import { puzzle1, puzzle2 } from "./day1.js";
import { puzzle3, puzzle4 } from "./day2.js";
import { puzzle5, puzzle6 } from "./day3.js";

const txtToArr = (filename, char) =>
  readFileSync(filename).toString().split(char);

// Day 1
const puzzleArr1 = txtToArr("day1.txt", "\n");
console.log("Day 1, Puzzle 1: ", puzzle1(puzzleArr1));
console.log("Day 1, Puzzle 2: ", puzzle2(puzzleArr1));

// Day 2
const puzzleArr2 = txtToArr("day2.txt", ",");
console.log("Day 2, Puzzle 1: ", puzzle3(puzzleArr2));
console.log("Day 2, Puzzle 2: ", puzzle4(puzzleArr2));

// Day 3
const puzzleArr3 = txtToArr("day3.txt", "\n");
console.log("Day 3, Puzzle 1: ", puzzle5(puzzleArr3));
console.log("Day 3, Puzzle 2: ", puzzle6(puzzleArr3));
