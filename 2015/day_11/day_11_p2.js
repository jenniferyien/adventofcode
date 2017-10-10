const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

function passSecurity(password) {
  const confusingLetters = password.includes('i') || password.includes('o') || password.includes('l')
  let straight = false
  let pairs = []
  for (let i = 0; i < password.length; i++) {
    currentLetter = password[i]
    currentIndex = alphabet.indexOf(currentLetter)
    nextLetter = alphabet.indexOf(password[i+1]) === currentIndex + 1
    nxNxLetter = alphabet.indexOf(password[i+2]) === currentIndex + 2
    if (nextLetter && nxNxLetter) {
      straight = true
    }
    if (currentLetter === password[i+1] && !pairs.includes(currentLetter + password[i+1])) {
      pairs.push(currentLetter + password[i+1])
    }
  }
  if (!confusingLetters && straight && pairs.length >= 2) {
    return true
  }
  return false
}

function incrementCharacter(char) {
  if (char === 'z') {
    return 'a'
  } else {
    return String.fromCharCode(char.charCodeAt(0) + 1)
  }
}

function pwIncrementor(pw) {
  const nextCharacter = incrementCharacter(pw.slice(-1))
  if (nextCharacter === 'a') {
    return pwIncrementor(pw.slice(0, -1)) + 'a'
  } else {
    return pw.slice(0, -1) + nextCharacter
  }
}

let password = 'vzbxkghb'
let count = 0
while(!passSecurity(password)) {
  password = pwIncrementor(password)
  if (passSecurity(password) && count !== 1) {
    count += 1
    password = pwIncrementor(password)
  }
}

console.log(`The next password should be ${password}`)
