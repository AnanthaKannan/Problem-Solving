// https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen;

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (v1 === v2) {  // if they're going the same speed, they can't meet
    return 'NO';
  }
  let x = x1;
  let y = x2;
  while (x < 10000 && y < 10000) {  
    x += v1;
    y += v2;
    if (x === y) {  
      return 'YES';
    }
  }
  console.log('this return')
  return 'NO';
}

console.log(kangaroo(4523 ,8092 ,9419 ,8076  ))

