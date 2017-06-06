const fs = require('fs')

const dataInput = fs.readFileSync('./test.txt', 'utf8')

let wire = {}

function wires(circuit) {
  // let wire = {}
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  array.map((str) => {
    string = str.split('->')
    wire[string[1].trim()] = string[0].trim()
    // console.log(str.split('->'))
  //   let wireInput = str[str.length -1]
  //   let input1 = wire[str[0]] || str[0]
  //   let input2 = wire[str[2]] || str[2]
  //   if(str[0] == 'NOT') {
  //     input = wire[str[1]] || str[1]
  //     wire[wireInput] = 65536 + ~input
  //   } else if(str[1] == 'OR') {
  //     wire[wireInput] = input1 | input2
  //   } else if(str[1] == 'RSHIFT') {
  //     wire[wireInput] = input1 >> input2
  //   } else if(str[1] == 'LSHIFT') {
  //     wire[wireInput] = input1 << input2
  //   } else if(str[1] == 'AND') {
  //     wire[wireInput] = input1 & input2
  //   } else {
  //     wire[wireInput] = input1
  //   }
  //   console.log(str)
  })
  console.log(wire)
  wireCheck(circuit)
  console.log(wire)
  // console.log(wire[val])
}

function wireCheck(circuit){
  let val = parseInt(wire[circuit])
  console.log(typeof val)
  if(!val) {
    // val = wire[circuit].split(' ')
    // console.log(val)
    if(val[0] == 'NOT') {
      wire[circuit] = 65535 + ~ wireCheck(val[1])
    } else if(val[1] == 'OR') {
      wire[circuit] = wireCheck(val[0]) | wireCheck(val[2])
    } else if(val[1] == 'RSHIFT') {
      wire[circuit] = wireCheck(val[0]) >> wireCheck(val[2])
    } else if(val[1] == 'LSHIFT') {
      wire[circuit] = wireCheck(val[0]) << wireCheck(val[2])
    } else if(val[1] == 'AND') {
      wire[circuit] = wireCheck(val[0]) & wireCheck(val[2])
    } else {
      wire[circuit] = wireCheck(val[0])
    }
  } else {
    wire[circuit] = val
  }
}
wires('d')
