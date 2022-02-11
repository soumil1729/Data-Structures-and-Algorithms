/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 1;
  let end = x;
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let sqrmid = mid * mid;
    if (sqrmid === x) return mid;
    else if (sqrmid > x) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
};

console.log(mySqrt(15));
