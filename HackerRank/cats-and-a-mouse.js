https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function catAndMouse(x, y, z) {

  const catA_distance = Math.abs(x - z)
  const catB_distance = Math.abs(y - z)

  if (catA_distance === catB_distance) {
    return 'Mouse C'
  }
  else if (catA_distance < catB_distance) {
    return 'Cat A'
  }
  return 'Cat B'

}

console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))