https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

function findDigits(n) {
  // Write your code here
  return n.toString().split('').map(nu => n % Number(nu)).filter(nu => nu === 0).length
}

console.log(findDigits(12)) // 2
console.log(findDigits(1012)) // 3
console.log(findDigits(124)) //  3
console.log(findDigits(111))  // 3
