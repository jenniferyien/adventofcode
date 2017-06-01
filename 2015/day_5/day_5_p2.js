const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function niceList(list) {
  let array = list.replace(/(\r\n|\n|\r)/gm," ").trim().split(' ')
  let niceNum = 0
  array.map((str) => {
    if(pairRepeat(str) && letterRepeat(str)) {
      niceNum = niceNum + 1
    }
  })
  console.log(`There are a total of ${niceNum} nice strings`)
}

function letterRepeat(str) {
  let letter
  let nice = false
  for (var i = 0, len = str.length; i < len; i++) {
    letter = str[i]
    if(letter == str[i] && letter == str[i+2]) {
      nice = true
    }
  }
  return nice
}

function pairRepeat(str) {
  let strPairs = []
  let nice = false
  for (var i = 0, len = str.length; i < len; i++) {
    pair = str[i] + str[i+1]
    strPairs.push(pair)
  }
  strPairs.map(function(pair) {
    newString = str.replace(pair, ' ')
    if(newString.indexOf(pair) > 0) {
      nice = true
    }
  })
  return nice
}

niceList(dataInput)
