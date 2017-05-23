// Part 1 && 2

function surface_area(input) {
  total_wp = 0
  total_r = 0
  array = input.split(' ')
  array.map((dimension) => {
    di = dimension.split('x')
    l = parseInt(di[0])
    w = parseInt(di[1])
    h = parseInt(di[2])
    total_wp = total_wp + wrapping_paper(l,w,h)
    total_r = total_r + ribbon(l,w,h)
  })
  console.log('Total Wrapping Paper Needed:', total_wp, 'square feet')
  console.log('Total Ribbon Needed:', total_r, 'feet')
}

function wrapping_paper(l,w,h) {
  side_1 = l*w
  side_2 = w*h
  side_3 = h*l
  area = 2*side_1 + 2*side_2 + 2*side_3
  smallest_side = Math.min(side_1, side_2, side_3)
  return area + smallest_side
}

function ribbon(l,w,h) {
  array = [l,w,h].sort(function(a, b){return a - b});
  ribbon_amount = array[0] + array[0] + array[1] + array[1]
  ribbon_for_bow = l*w*h
  return ribbon_amount + ribbon_for_bow
}

surface_area("2x3x4 1x1x10")
