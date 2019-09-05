const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function winningDistance(seconds) {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let reindeerSpeeds = eachReindeer(array, seconds)
  const points = distancePoints(reindeerSpeeds, seconds)
  points.sort(function(a,b) {return a - b})
  console.log(`After 2503 seconds, the winning reindeer has ${points.pop()} points.`)
}

function eachReindeer(description, totalSecs) {
  let distances = {}
  description.forEach(function(reindeer){
    let speed = reindeer.match(/\d+/g)
    //[km/s, seconds, rest seconds]
    const km = parseInt(speed[0])
    const sec = parseInt(speed[1])
    const restSec = parseInt(speed[2])
    let deerSpeed = []
    let go = 0
    let rest = 0

    do {
      for (let i = 0; i < sec; i++) {
        deerSpeed.push(km)
        go +=1
      }
      for (let j = 0; j < restSec; j++) {
        deerSpeed.push(0)
        rest += 1
      }
    } while(deerSpeed.length < totalSecs)

    const deer = reindeer.split(' ')[0]
    distances[deer] = {
      'speeds': deerSpeed,
      'totalDistance': 0,
      'points': 0
    }
  })
  return distances
}

function distancePoints(speeds, endSeconds) {
  let deerPoints = []
  for (let i = 0; i < endSeconds; i++) {
    let winner = []
    let distance;
    for (let key in speeds) {
      const speed = speeds[key]['speeds'][i]
      speeds[key]['totalDistance'] += speed
      const totalD = speeds[key]['totalDistance']
      if (!distance) {
        distance = totalD
        winner.push(key)
      } else if (totalD > distance) {
        distance = totalD
        winner = [key]
      } else if (totalD == distance) {
        winner.push(key)
      }
    }
    for (let key in speeds) {
      const deer = speeds[key]
      if(winner.indexOf(key) >= 0) {
        deer['points'] += 1
      }
    }
  }
  //pull out list of points
  for(let key in speeds) {
    deerPoints.push(speeds[key]['points'])
  }
  return deerPoints
}

winningDistance(2503)
