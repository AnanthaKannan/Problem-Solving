function getMoneySpent(keyboards, drives, b) {

  let addedPrice = []
  keyboards.forEach(keyboard => {
    drives.forEach(drive => {
      addedPrice.push(keyboard + drive)
    });
  });

  let maxValue = -1
  addedPrice.sort().forEach(price => {
    if(price <= b && maxValue < price){
      maxValue = price;
    }
  })

  return maxValue
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10))