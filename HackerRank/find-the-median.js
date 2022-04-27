https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true

function findMedian(arr) {
  // Write your code here
  const idx = Math.floor(arr.sort((a, b) => a-b).length / 2)
  return arr[idx]
}

console.log(findMedian([5, 3, 1, 2, 4]))
console.log(findMedian([0, 1, 2, 4, 6, 5, 3]))
console.log(findMedian([10, 15, 16, 9, 1, 11, 22]))
console.log(findMedian([99, 45, 26, 7, 11, 122, 22]))
