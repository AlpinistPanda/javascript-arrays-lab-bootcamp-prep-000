var kittens = ["Milo", "Otis", "Garfield"]; 
//define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return
}

function destructivelyPrependKitten(name) {
  kittens.shift(name)
  return
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return 0
}

function destructivelyRemoveFirstKitten() {
  kittens.unshift()
  return 0
}