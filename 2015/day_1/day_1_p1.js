const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function snow(floor) {
  let floor_number = 0
  let fl = floor.split('')
  fl.map((a) => {
   if(a == "(") {
     floor_number = floor_number + 1
   }
   if(a == ")") {
     floor_number = floor_number - 1
   }
  })
  console.log('Santa arrives on floor', floor_number)
}

snow(dataInput)
