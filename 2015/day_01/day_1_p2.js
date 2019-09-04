const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function enter(floor) {
  let floor_number = 0
  let position = 0
  let locations = []
  fl = floor.split('')
  fl.map((a) => {
   if(a == "(") {
     floor_number = floor_number + 1
     position = position + 1
   }
   if(a == ")") {
     floor_number = floor_number - 1
     position = position + 1
   }
   if(floor_number == -1) {
     locations.push(position)
   }
  })
  let firstEnter = locations[0]
  console.log('Santa enters the basement first in position', firstEnter)
}

enter(dataInput)
