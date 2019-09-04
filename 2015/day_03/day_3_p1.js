const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function deliver(input) {
  let house = 0
  let position_vertical = 0
  let position_horizontal = 0
  let coordinates = { 0: [0]}
  let array = input.split('')
  array.map((direction) => {
    if(direction == '>') {
      position_horizontal = position_horizontal + 1
    } else if (direction == '<') {
      position_horizontal = position_horizontal - 1
    } else if (direction == '^') {
      position_vertical = position_vertical + 1
    } else if (direction == 'v') {
      position_vertical = position_vertical - 1
    }
    if(coordinates[position_horizontal]) {
      if(coordinates[position_horizontal].indexOf(position_vertical) == -1) {
       coordinates[position_horizontal].push(position_vertical)
      }
    } else {
      coordinates[position_horizontal] = [position_vertical]
    }
  })
  for (var num in coordinates) {
    house = house + coordinates[num].length
  }
  console.log(`There are at least ${house} houses that receive presents.`)
}

deliver(dataInput)
