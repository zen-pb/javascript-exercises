const reverseString = function (string) {
  /* The string gets split into an array of characters, 
     the array of characters is reversed, 
     then concatenate all characters into a single string.
  */
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
