https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

function superReducedString(s) {
  // Write your code here
  let stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    const stackLasChar = stack[stack.length - 1];
    if (stackLasChar === s[i])
      stack.splice(stack.length - 1, 1)   // remove the character form the stack
    else {
      stack.push(s[i])
    }
  }
  return stack.length < 1 ? 'Empty String' : stack.toString().replace(/,/g, '')
}


console.log(superReducedString('aaabccddd'))