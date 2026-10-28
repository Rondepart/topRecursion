export function fibs(n) {
  const fibsArr = [];
  
  for(let i = 0; i < n; i++) {
    if (i === 0) {fibsArr.push(0); continue};
    if (i === 1) {fibsArr.push(1); continue};
    
    fibsArr[i] = fibsArr[i - 1] + fibsArr[i - 2];
  }

  return fibsArr;
} 