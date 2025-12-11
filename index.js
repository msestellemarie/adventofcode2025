import { readFileSync } from "node:fs";
import { puzzle1, puzzle2 } from "./day1.js";

const txtToArr = (filename) => readFileSync(filename).toString().split("\n");

// Day 1
const puzzleArr1 = txtToArr("day1.txt");
console.log("Day 1, Puzzle 1: ", puzzle1(puzzleArr1));
console.log("Day 1, Puzzle 2: ", puzzle2(puzzleArr1));
