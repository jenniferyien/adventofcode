const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function arrangement() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
}

arrangement()
