const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

const tickerTape = {
  'children': 3,
  'cats': 7,
  'samoyeds': 2,
  'pomeranians': 3,
  'akitas': 0,
  'vizslas': 0,
  'goldfish': 5,
  'trees': 3,
  'cars': 2,
  'perfumes': 1
}

function auntSue() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let aunts = auntList(array)
  let selectedAunt = updatedMatch(aunts)
  console.log(`Aunt Sue ${selectedAunt} is the one that actually got the gift.`)
}

function updatedMatch(descriptions) {
  let auntNumber;
  for (let aunt in descriptions) {
    let descripters = descriptions[aunt]
    let totalMatch = 0
    for (let attribute in descripters) {
      let updates = ['cats', 'trees', 'pomeranians', 'goldfish']
      if ((attribute == 'cats' || attribute == 'trees') && tickerTape[attribute] < descripters[attribute]) {
        totalMatch += 1
      } else if ((attribute == 'pomeranians' || attribute == 'goldfish') && tickerTape[attribute] > descripters[attribute]) {
        totalMatch += 1
      } else if (updates.indexOf(attribute) < 0 && tickerTape[attribute] == descripters[attribute]) {
        totalMatch += 1
      }
    }
    if (totalMatch == 3) {
      auntNumber = aunt
    }
  }
  return auntNumber
}

function auntList(list) {
  let aunts = {}
  list.forEach(function(aunt) {
    const compounds = aunt.match(/(\d+):\s([a-z]+):\s(\d+),\s([a-z]+):\s(\d+),\s([a-z]+):\s(\d+)/)
    let sue = compounds[1]
    aunts[sue] = {}
    aunts[sue][compounds[2]] = parseInt(compounds[3]),
    aunts[sue][compounds[4]] = parseInt(compounds[5]),
    aunts[sue][compounds[6]] = parseInt(compounds[7])
  })
  return aunts
}

auntSue()
