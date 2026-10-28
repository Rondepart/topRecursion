import { fibs, fibsRec } from "./recursion.js";

describe.each([
  ["fibs", fibs],
  ["fibsRec", fibsRec],
])("%s", (name, fn) => {
  test("returns an empty array for 0", () => {
    expect(fn(0)).toEqual([]);
  });

  test("returns [0] for 1", () => {
    expect(fn(1)).toEqual([0]);
  });

  test("returns [0, 1] for 2", () => {
    expect(fn(2)).toEqual([0, 1]);
  });

  test("returns the first 8 numbers", () => {
    expect(fn(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("returns the first 15 numbers", () => {
    expect(fn(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
  });

  test("returns an array of length n", () => {
    expect(fn(20)).toHaveLength(20);
  });
});