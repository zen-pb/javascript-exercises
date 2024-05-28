const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge =
      (!oldest.yearOfDeath ? new Date().getFullYear() : oldest.yearOfDeath) -
      oldest.yearOfBirth;
    const currentAge =
      (!current.yearOfDeath ? new Date().getFullYear() : current.yearOfDeath) -
      current.yearOfBirth;
    return oldestAge < currentAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
