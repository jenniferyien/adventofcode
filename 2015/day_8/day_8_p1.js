const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function storage() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let character = 0
  let inMemory = 0

  array.map((str) => {
    character = character + str.length
    evalString = eval(str)
    inMemory = inMemory + evalString.length
  })
  console.log(`Number total in file is ${character - inMemory}`)
}

storage()
