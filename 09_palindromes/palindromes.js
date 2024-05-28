const palindromes = function (phrase) {
  const punctSpaces = [" ", ".", ",", "!", "?"];

  phrase = phrase.toLowerCase().split("");

  for (let i = 0; i < phrase.length; i++) {
    let val = phrase[i];

    for (let punctSpace of punctSpaces) {
      if (val === punctSpace) {
        phrase.splice(i, 1);
        i--;
      }
    }
  }
  return phrase.join("") === phrase.reverse().join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
