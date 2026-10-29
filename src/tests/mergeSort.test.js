import { mergeSort } from "../scripts/mergeSort.js";

describe("mergeSort", () => {
  test("returns an empty array for an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("returns a single-element array unchanged", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("leaves an already sorted array as is", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array with duplicates", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("sorts an array with an even length", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });

  test("sorts a reverse-ordered array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts numerically, not alphabetically", () => {
    expect(mergeSort([10, 9, 100, 1])).toEqual([1, 9, 10, 100]);
  });

  test("handles negative numbers", () => {
    expect(mergeSort([3, -1, 0, -7, 2])).toEqual([-7, -1, 0, 2, 3]);
  });

  test("does not mutate the original array", () => {
    const input = [3, 1, 2];
    mergeSort(input);
    expect(input).toEqual([3, 1, 2]);
  });
});