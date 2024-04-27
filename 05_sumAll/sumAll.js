const sumAll = function (num1, num2) {
  let sumOfNumbers = undefined;

  if (
    Number.isInteger(num1) &&
    Number.isInteger(num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    sumOfNumbers = ((start + end) * (end - start + 1)) / 2;
  } else {
    return "ERROR";
  }

  return sumOfNumbers;
};

// Do not edit below this line
module.exports = sumAll;
