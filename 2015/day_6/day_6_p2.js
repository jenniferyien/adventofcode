const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function lightConfig(instructions) {
  let array = instructions.replace(/(\r\n|\n|\r)/gm,":").trim().split(':')
  let coords = {}
  array.map((str) => {
    let instruct = str.split(' ')
    if(instruct[0] == 'turn') {
      let startCoords = instruct[2].split(',')
      let endCoords = instruct[instruct.length - 1].split(',')
      let xStart = parseInt(startCoords[0])
      let xEnd = parseInt(endCoords[0])
      let yStart = parseInt(startCoords[1])
      let yEnd = parseInt(endCoords[1])
      coords = setCoords(coords, xStart, xEnd, yStart, yEnd, instruct[1])
    } else if (instruct[0] == 'toggle') {
      let startTog = instruct[1].split(',')
      let endTog = instruct[instruct.length - 1].split(',')
      let xStart = parseInt(startTog[0])
      let xEnd = parseInt(endTog[0])
      let yStart = parseInt(startTog[1])
      let yEnd = parseInt(endTog[1])
      coords = setCoords(coords, xStart, xEnd, yStart, yEnd, instruct[0])
    }
  })
  console.log(`All the lights has a total brightness of ${Object.values(coords).reduce((a,b) => a + b, 0)}.`)
}

function setCoords(obj, xS, xE, yS, yE, state) {
  let begin = parseInt(xS)
  let stop = parseInt(xE) + 1
  do {
    for(i=yS; i <= yE; i++) {
      if(state == 'on') {
        if(obj[`${begin},${i}`]) {
          obj[`${begin},${i}`] = obj[`${begin},${i}`] + 1
        } else {
          obj[`${begin},${i}`] = 1
        }
      } else if(state == 'off') {
        if(obj[`${begin},${i}`] && obj[`${begin},${i}`] > 0) {
          obj[`${begin},${i}`] = obj[`${begin},${i}`] - 1
        } else {
          obj[`${begin},${i}`] = 0
        }
      } else if(state == 'toggle') {
        if(obj[`${begin},${i}`]) {
          obj[`${begin},${i}`] = obj[`${begin},${i}`] + 2
        } else {
          obj[`${begin},${i}`] = 2
        }
      }
    }
    begin = begin + 1
  } while (begin != stop);
  return obj
}

lightConfig(dataInput)
