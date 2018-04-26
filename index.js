const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(1);
}
function appendKitten(name){
  var kitten = [...kittens, name]
  return kitten;
}
function prependKitten(name){
  var kitten = [name, ...kittens]
  return kitten;
}
function removeLastKitten(name){
  var kitten = 
  return kitten;
}
function removeFirstKitten(name){
  var kitten = 
  return kitten;
  
}