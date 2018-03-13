// generate character frequency data
function genHistogram (data) {
  let hist = {}
  let c;
  for (let i = 0 ; c = data[i] ; i++) {
    if (c in hist) hist[c]++
    else hist[c] = 1
  } 
  return hist
}

// reverse a string
function reverseString (data) {
  return data.split('').reverse().join('')
}

export { genHistogram, reverseString }
