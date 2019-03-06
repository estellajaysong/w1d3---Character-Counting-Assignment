function countLetters(str) {
  var output = {};
  str = str.split(" ").join("");

  for (let i = 0; i < str.length; i++) {
    var letter = str[i]
    if (!output[letter]) {
      output[letter] = 1
    }
    else {
      output[letter] = output[letter] + 1
    }
  }
  return output
}

console.log(countLetters("lighthouse in the house"))