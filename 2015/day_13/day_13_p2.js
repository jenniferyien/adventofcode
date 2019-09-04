const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8')

function arrangement() {
  let array = dataInput.replace(/(\r\n|\n|\r)/gm,"\n").trim().split('\n')
  let guestList = guests(array)
  let variationList = permutation(guestList)
  let potentialHappiness = seatings(array, guestList)
  let attendeeHappiness = allHappiness(variationList, potentialHappiness)
  console.log(`The total change in happiness for the optimal seating arrangement that includes myself is ${attendeeHappiness.pop()}.`)
}

function guests(array) {
  let people = ['Me']
  array.forEach(function(sen) {
    let name = sen.split(' ')[0]
    people.push(name)
  })
  return people.filter(function(v, i , array) {
    return array.indexOf(v) == i
  })
}

function permutation(names) {
  let per = []
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      per.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
  }
  permute(names)
  return per
}

function seatings(ss, guests) {
  let seats = {}
  for(let i = 0; i < ss.length; i++) {
    let pairing = ss[i].match(/([A-Z][a-z]+)/g)
    let gain = ss[i].match(/gain/g)
    let loss = ss[i].match(/lose/g)
    let count = ss[i].match(/(\d+)/g)[0]
    let first = pairing[0]
    let second = pairing[1]
    if (!seats[first]) {
      seats[first] = {}
    }
    if (gain) {
      seats[first][second] = parseInt(count)
    } else if (loss) {
      seats[first][second] = parseInt(-count)
    }
    seats[first]['Me'] = 0
  }
  for(let j = 0; j < guests.length; j++) {
    if (!seats['Me']) {
      seats['Me'] = {}
    }
    seats['Me'][guests[j]] = 0
  }
  return seats
}

function allHappiness(per, base) {
  let happy = []
  per.forEach(function(seating){
    let sum = 0
    for (let i = 0; i < seating.length; i ++) {
      let current = seating[i]
      let next = seating[i + 1]
      if (i == seating.length -1) {
        next = seating[0]
      }
      sum += base[current][next]
      sum += base[next][current]
    }
    happy.push(sum)
  })
  happy = happy.filter(function(v, i, a) {
    return a.indexOf(v) == i
  })
  return happy.sort(function(a, b){return a - b})
}

arrangement()
