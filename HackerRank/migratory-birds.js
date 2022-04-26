https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

function migratoryBirds(arr) {
  // Write your code here
  arr = arr.sort()
  const obj = arr.reduce((pre, curr) => {
    if (pre[curr])
      return pre;
    const repeatCount = arr.filter(value => value === curr)
    return { ...pre, [curr]: repeatCount.length }
  }, {})

  // return obj;

  const max = Math.max(...Object.values(obj));
  let finalValue = []
  for (let key in obj) {
    const value = obj[key];
    if (value === max){
      finalValue.push(key)
    }
  }
  return Number(finalValue.sort()[0])
}


// console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))