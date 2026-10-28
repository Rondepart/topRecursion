export function fibs(n) {
  const fibsArr = [];

  for(let i = 0; i < n; i++) {
    if (i === 0) {fibsArr.push(0); continue};
    if (i === 1) {fibsArr.push(1); continue};
    
    fibsArr[i] = fibsArr[i - 1] + fibsArr[i - 2];
  }

  return fibsArr;
} 

export function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0,1];

  const fibsArr = fibsRec(n-1);

  for(let i = 2; i < n; i++) {
    fibsArr[i] = fibsArr[i - 1] + fibsArr[i -2];
  }

  return fibsArr;
}