const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function newSum() {
  let array = dataInput.match(/(-?[0-9]\d*)/g)
  // let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')

}

newSum()
