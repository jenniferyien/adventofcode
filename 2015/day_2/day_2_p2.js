const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function surface_area(input) {
  let total_r = 0
  let array = input.split(' ')
  array.map((dimension) => {
    di = dimension.split('x')
    l = parseInt(di[0])
    w = parseInt(di[1])
    h = parseInt(di[2])
    total_r = total_r + ribbon(l,w,h)
  })
  console.log(`Total Ribbon Needed: ${total_r} feet`)
}

function ribbon(l,w,h) {
  let array = [l,w,h].sort(function(a, b){return a - b});
  let ribbon_amount = array[0] + array[0] + array[1] + array[1]
  let ribbon_for_bow = l*w*h
  return ribbon_amount + ribbon_for_bow
}

surface_area(dataInput)
