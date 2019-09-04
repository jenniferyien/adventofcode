const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function distance() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let locations = []
  let directions = []
  array.map((str) => {
    let dir = str.split(' ')
    directions.push(dir)
    if(!locations.includes(dir[0])){
      locations.push(dir[0])
    } else if(!locations.includes(dir[2])) {
      locations.push(dir[2])
    }
  })
  function permut(array) {
    if (array.length < 2) { return array }
    let permutations = []
    for (let i = 0; i< array.length; i++) {
      let current = array[i]
      if (array.indexOf(current) != i) {
        continue
      }
      let remainArray = array.slice(0,i).concat(array.slice(i+1, array.length))
      for (let subPer of permut(remainArray)) {
        let value = [current, subPer]
        if (Array.isArray(subPer)) {
          value = [current].concat(subPer)
        }
        permutations.push(value)
      }
    }
    return permutations
  }
  let possibleRoutes = permut(locations)
  let shortestDistance
  possibleRoutes.map((route) => {
    let distance = 0
    for (let i= 0; i < route.length; i++) {
      directions.forEach((location) => {
        if (location.indexOf(route[i]) >= 0 && location.indexOf(route[i + 1]) >= 0) {
          distance += parseInt(location[location.length -1])
        }
      })
    }
    if (!shortestDistance || shortestDistance >= distance) {
      shortestDistance = distance
    }
  })
  console.log('The distance of the shortest route is', shortestDistance)
}

distance()
