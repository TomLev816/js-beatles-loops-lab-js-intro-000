function theBeatlesPlay(musicians,instruments){
  var array = []
  for (let i=0; i < musicians.length; i++ ){
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(factArray){
  let i = factArray.length
  let a = 0
  while (a < i){
    factArray[a] = factArray[a] + '!!!'
    a++
  }
  return factArray
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push('I love the Beatles!')
    n++
  } while (n < 15);
  return array
}
