const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function newSum() {
  let json = JSON.parse(dataInput)
  let sum = returnObjectSum(json, 0)
  console.log(`Ignoring objects with property "red", the sum of all the numbers is ${sum}.`)
}

function returnObjectSum(object, sum) {
  let newS = 0
  for(let prop in object) {
    let isArray = object instanceof Array
    let value = object[prop]
    let type = typeof value
    if (type === 'object') {
      newS += returnObjectSum(value, newS)
    } else if (type == 'number') {
      newS += value
    } else if (!isArray && type == 'string' && value == 'red') {
      newS = 0
      break;
    }
  }
  return newS
}

newSum()
