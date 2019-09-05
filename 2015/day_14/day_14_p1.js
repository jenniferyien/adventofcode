const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function winningDistance(seconds) {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let reindeerSpeeds = eachReindeer(array)
  const distance = distanceTraveled(reindeerSpeeds, seconds)
  distance.sort(function(a,b) {return a - b})
  console.log(`After 2503 seconds, the winning reindeer traveled ${distance.pop()} km/sec.`)
}

function eachReindeer(description) {
  let distances = []
  description.forEach(function(reindeer){
    let speed = reindeer.match(/\d+/g)
    //[km/s, seconds, rest seconds]
    distances.push(speed)
  })
  return distances
}

function distanceTraveled(speeds, endSeconds) {
  let traveledDistance = []
  for (let i = 0; i < speeds.length; i++) {
    let total = 0
    const deer = speeds[i]
    const km = parseInt(deer[0])
    const sec = parseInt(deer[1])
    const rest = parseInt(deer[2])
    const secRest = rest + sec
    let maxWithRest = Math.floor(endSeconds/secRest)
    const maxDistanceWithRest = (km * sec) * maxWithRest
    const secondsLeft = endSeconds - (secRest * maxWithRest)
    const addAnotherSet = secondsLeft - sec
    let remainderSec = 0
    if (addAnotherSet >= 0 && addAnotherSet - rest < 0) {
      maxWithRest += 1
    } else if (addAnotherSet < 0){
      remainderSec += addAnotherSet
    }
    total = (km * sec) * maxWithRest
    if (remainderSec > 0) {
      total += (km * remainderSec)
    }
    traveledDistance.push(total)
  }
  return traveledDistance
}

winningDistance(2503)
