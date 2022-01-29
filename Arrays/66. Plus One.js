/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arr = [];
  let n = digits.length - 1;
  let sum = 1;
  while (n >= 0 || sum > 0) {
    if (n >= 0) sum = digits[n] + sum;
    arr.push(sum % 10);
    sum = Math.floor(sum / 10);
    n--;
  }
  return arr.reverse();
};
