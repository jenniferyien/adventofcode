const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function quantum() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  console.log('Have not solved problem yet...')
}

quantum()
