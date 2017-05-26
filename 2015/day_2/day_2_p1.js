const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function surface_area(input) {
  let total_wp = 0
  let array = input.split(' ')
  array.map((dimension) => {
    di = dimension.split('x')
    l = parseInt(di[0])
    w = parseInt(di[1])
    h = parseInt(di[2])
    total_wp = total_wp + wrapping_paper(l,w,h)
  })
  console.log(`Total Wrapping Paper Needed: ${total_wp} square feet`)
}

function wrapping_paper(l,w,h) {
  let side_1 = l*w
  let side_2 = w*h
  let side_3 = h*l
  let area = 2*side_1 + 2*side_2 + 2*side_3
  let smallest_side = Math.min(side_1, side_2, side_3)
  return area + smallest_side
}

surface_area(dataInput)
