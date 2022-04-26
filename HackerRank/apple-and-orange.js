function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  apples = apples.map(x => x + a);
  oranges = oranges.map(x => x + b);
  let count = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] >= s && apples[i] <= t) {
      count++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] >= s && oranges[i] <= t) {
      count++;
    }
  }
  return count;
}

const result = countApplesAndOranges(7, 11, 5, 15, [2, 3, -1], [3, -2, -4]);
console.log(result);