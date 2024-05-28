const fibonacci = function (num) {
  if (!isNaN(Number(num)) && num >= 0) {
    num = Number(num);
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
