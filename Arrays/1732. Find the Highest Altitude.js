var largestAltitude = function (gain) {
  let current = 0;
  let len = gain.length;
  let max = current;
  for (let i = 0; i < len; i++) {
    current = current + gain[i];
    max = Math.max(max, current);
  }

  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-5, -1, -5, -2, -7]));
