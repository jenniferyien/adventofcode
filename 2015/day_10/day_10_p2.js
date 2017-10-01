function lookSay(num) {
  let newLength = ''
  let currentNum
  let count = 0
  for (let i = 0; i <= num.length; i++) {
    if (i === 0) {
      currentNum = num[i]
      count += 1
    } else if (num[i] === currentNum) {
      count += 1
    } else if (num[i] !== currentNum) {
      newLength += count.toString() + currentNum
      currentNum = num[i]
      count = 1
    }
  }
  return newLength
}

let numTimes = 0
let currentLookSay = (3113322113).toString()
for (let i = 0; i < 50; i++) {
  numTimes = i
  currentLookSay = lookSay(currentLookSay)
}
console.log('The length of the result is', currentLookSay.length)
