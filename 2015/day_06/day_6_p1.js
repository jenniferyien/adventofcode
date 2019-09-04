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
  console.log(`There is a total of ${Object.keys(coords).length} lights lit.`)
}

function setCoords(obj, xS, xE, yS, yE, state) {
  let begin = parseInt(xS)
  let stop = parseInt(xE) + 1
  do {
    for(i=yS; i <= yE; i++) {
      if(state == 'on') {
        obj[`${begin},${i}`] = ''
      } else if(state == 'off') {
        delete obj[`${begin},${i}`]
      } else if(state == 'toggle') {
        if(obj.hasOwnProperty(`${begin},${i}`)) {
          delete obj[`${begin},${i}`]
        } else {
          obj[`${begin},${i}`] = ''
        }
      }
    }
    begin = begin + 1
  } while (begin != stop);
  return obj
}
lightConfig(dataInput)
