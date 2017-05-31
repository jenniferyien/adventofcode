const md5 = require('md5');
const dataInput = 'bgvyzdsv'
let hash
let num = 0

do {
  input = dataInput + num
  hash = md5(input)
  if(hash.startsWith('00000')){
    num
  } else {
    num++
  }
} while (!hash.startsWith('00000'));

console.log(`The lowest positive number produced is ${num}.`)
