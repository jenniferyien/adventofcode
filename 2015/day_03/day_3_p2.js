const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function speedDeliver(input) {
  var house = 0
  var santaCoordinates = { 0: [0]}
  var roboSantaCoordinates = { 0: [0]}
  var array = input.split('')
  var santa = []
  var roboSanta = []
  array.map((direction, index) => {
    if(index % 2 == 0) {
      santa.push(direction)
    } else {
      roboSanta.push(direction)
    }
  })
  function positioning(array, hash) {
    var position_vertical = 0
    var position_horizontal = 0
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
      if(hash[position_horizontal]) {
        if(hash[position_horizontal].indexOf(position_vertical) == -1) {
        hash[position_horizontal].push(position_vertical)
        }
      } else {
        hash[position_horizontal] = [position_vertical]
      }
    })
  }
  positioning(santa, santaCoordinates)
  positioning(roboSanta, roboSantaCoordinates)
  var matching = []
  for (var num in santaCoordinates) {
    if(roboSantaCoordinates[num]) {
      same = getMatch(santaCoordinates[num], roboSantaCoordinates[num])
      matching = matching.concat(same)
    }
    house = house + santaCoordinates[num].length
  }
  for (var num in roboSantaCoordinates) {
    house = house + roboSantaCoordinates[num].length
  }
  total_houses = house - matching.length
  console.log(`There are at least ${total_houses} houses that receive presents.`)
}

function getMatch(a, b) {
  var matches = [];
  for ( var i = 0; i < a.length; i++ ) {
      for ( var e = 0; e < b.length; e++ ) {
          if ( a[i] === b[e] ) matches.push( a[i] );
      }
  }
  return matches;
}

speedDeliver(dataInput)
