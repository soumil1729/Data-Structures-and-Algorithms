/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 0;
  let end = num;
  let ans = 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let sqrt = mid * mid;
    if (sqrt === num) return true;
    else if (sqrt > num) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }

  return false;
};
