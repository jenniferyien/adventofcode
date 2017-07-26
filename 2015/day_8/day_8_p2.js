const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function storage() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let encodeCharacters = 0
  let literalCharacters = 0

  array.map((str) => {
    literalCharacters = literalCharacters + str.length
    encodedString = JSON.stringify(str)
    encodeCharacters = encodeCharacters + encodedString.length
  })
  console.log(`Number total in file is ${encodeCharacters - literalCharacters}`)
}

storage()
