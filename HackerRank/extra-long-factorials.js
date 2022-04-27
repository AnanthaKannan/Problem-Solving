https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function extraLongFactorials(n) {
  // Write your code here
  let result = 1n;
  n = BigInt(n)
  for (let idx = n; idx > 0n; idx--) {
    result = result * idx
  }
  console.log(result.toString())
}

extraLongFactorials(30)
