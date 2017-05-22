function snow(floor) {
  floor_number = 0
  position = 0
  fl = floor.split('')
  fl.map((a) => {
   if(a == "(") {
     floor_number = floor_number + 1
     position = position + 1
   }
   if(a == ")") {
     floor_number = floor_number - 1
     position = position + 1
   }
   if(floor_number == -1) {
     console.log('position', position)
   }
  })
  console.log('floor', floor_number)
}

snow()
