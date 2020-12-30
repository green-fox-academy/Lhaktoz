'use strict';

let map2 = {
  '978-1-60309-452-8' : 'A Letter to Jo',
  '978-1-60309-459-7' : 'Lupus',
  '978-1-60309-444-3' : 'Red Panda and Moon Bear',
  '978-1-60309-461-0' : 'The Lab'
}

// Print all the key-value pairs in the following format
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)

for (let key in map2){
  console.log(`${map2[key]} \(ISBN: ${key}\)`)
}

// Remove the key-value pair with key 978-1-60309-444-3

delete map2['978-1-60309-444-3']


// Remove the key-value pair with value The Lab
for (let key in map2){
  if(map2[key] === 'The Lab'){
    delete map2[key]
  }
}
console.log(map2)
// Add the following key-value pairs to the map
// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?
// Print whether there is an associated value with key 478-0-61159-424-8 or not
map2['978-1-60309-450-4'] = 'They Called Us Enemy'
map2['978-1-60309-453-5'] = 'Why Did We Trust Him?'

let output: string = ''
for (let key in map2){
  
  if(key === '478-0-61159-424-8'){
    output = (`There is a ${key} key in the object`)
  } else {
    output =`There isn\'t a ${key} key in the object`
  }
}
console.log(output)
// Print the value associated with key 978-1-60309-453-5
console.log(map2['978-1-60309-453-5'])