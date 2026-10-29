export function mergeSort(arr) {
  if (!(arr.length > 1)) return arr;

  const half = Math.floor(arr.length /2);
  const firstHalf = mergeSort(arr.slice(0, half));
  const secondHalf = mergeSort(arr.slice(half));

  const sortedArr = [];
  let firstHalfCtr = 0;
  let secondHalfCtr = 0;

  for (let i = 0; i < arr.length; i++) {
    const firstHalfVal = firstHalfCtr < firstHalf.length  ? firstHalf[firstHalfCtr] : undefined;
    const secondHalfVal = secondHalfCtr < secondHalf.length ? secondHalf[secondHalfCtr] : undefined;

    if (firstHalfVal === undefined || secondHalfVal === undefined) {
      const remainingArr = firstHalfCtr === firstHalf.length ? secondHalf.slice(secondHalfCtr) : firstHalf.slice(firstHalfCtr);
      sortedArr.push(...remainingArr);
      break;
    }

    if (firstHalfVal <= secondHalfVal) {
      sortedArr.push(firstHalfVal);
      firstHalfCtr++;
    } else if (secondHalfVal < firstHalfVal) {
      sortedArr.push(secondHalfVal);
      secondHalfCtr++;
    }
  }

  return sortedArr;
}


console.log(mergeSort([10, 100, 7, 8, 67, 4, 69, -100]));