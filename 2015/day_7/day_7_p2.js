const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

let wire = {}

function setWires() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  array.map((str) => {
    string = str.split('->')
    let wireInput = string[string.length - 1].trim()
    wire[wireInput] = string[0].trim()
  })
}

function wires(circuit) {
  setWires()
  let wireA = wireCheck(circuit)
  setWires()
  wire['b'] = wireA
  return wireCheck(circuit)
}

function evaluateWire(val) {
  let valueSplice = val.split(' ')
  if(valueSplice[0] == 'NOT') {
    let v1 = wireCheck(valueSplice[1])
    return 65536 + ~ v1
  } else if(valueSplice[1] == 'OR') {
    let v1 = wireCheck(valueSplice[0])
    let v2 = wireCheck(valueSplice[2])
    return v1 | v2
  } else if(valueSplice[1] == 'RSHIFT') {
    let v1 = wireCheck(valueSplice[0])
    return v1 >> parseInt(valueSplice[2])
  } else if(valueSplice[1] == 'LSHIFT') {
    let v1 = wireCheck(valueSplice[0])
    return v1 << parseInt(valueSplice[2])
  } else if(valueSplice[1] == 'AND') {
    let v1 = wireCheck(valueSplice[0])
    let v2 = wireCheck(valueSplice[2])
    return v1 & v2
  } else if (isNaN(parseInt(val))){
    return wireCheck(val)
  } else {
    return parseInt(val)
  }
}

function wireCheck(circuit){
  let val = wire[circuit]
  if (!val) {
    return parseInt(circuit)
  }
  if (typeof val != 'number') {
    wire[circuit] = evaluateWire(val)
  }
  return wire[circuit]
}
console.log('This signal provided to wire a is', wires('a'))
