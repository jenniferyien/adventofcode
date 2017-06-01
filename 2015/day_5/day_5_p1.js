const fs = require('fs')

const dataInput = fs.readFileSync('./sample_input.txt', 'utf8');

function niceList(list) {
  let array = list.replace(/(\r\n|\n|\r)/gm," ").trim().split(' ')
  let niceNum = 0
  array.map((str) => {
    if(unwantedString(str) && threeVowels(str) && letterRepeat(str)) {
      niceNum = niceNum + 1
    }
  })
  console.log(`There are a total of ${niceNum} nice strings`)
}

function threeVowels(str) {
  let count = 0
  let nice = false
  for (var i = 0, len = str.length; i < len; i++) {
    if(~str[i].indexOf('a') || ~str[i].indexOf('e') || ~str[i].indexOf('i') || ~str[i].indexOf('o') || ~str[i].indexOf('u')){
      count = count + 1
    }
  }
  if(count >= 3) {
    nice = true
  }
  return nice
}

function letterRepeat(str) {
  let letter
  let nice = false
  for (var i = 0, len = str.length; i < len; i++) {
    if(letter == str[i]) {
      nice = true
    } else {
      letter = str[i]
    }
  }
  return nice
}

function unwantedString(str) {
  let nice = true
  if(~str.indexOf('ab') || ~str.indexOf('cd') || ~str.indexOf('pq') || ~str.indexOf('xy')){
    nice = false
  }
  return nice
}

niceList(dataInput)
