const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function numSum() {
  let array = dataInput.match(/(-?[0-9]\d*)/g)
  let sum = 0
  array.forEach(function(num) {
    sum += parseInt(num)
  })
  console.log(`The sum of all the numbers is ${sum}.`)
}

numSum()
