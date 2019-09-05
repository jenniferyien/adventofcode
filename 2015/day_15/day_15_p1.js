const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function highScoreCookie() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  const properties = ingredients(array)
  console.log('Have not solved problem yet...')
}

function ingredients(list) {
  let listings = {}
  list.forEach(function(ingred) {
    const teaspoon = ingred.match(/-?\d+/g)
    let name = ingred.split(':')[0]
    listings[name] = {
      'capacity': parseInt(teaspoon[0]),
      'durability': parseInt(teaspoon[1]),
      'flavor': parseInt(teaspoon[2]),
      'texture': parseInt(teaspoon[3]),
      'calories': parseInt(teaspoon[4])
    }
  })
  return listings
}

highScoreCookie()
