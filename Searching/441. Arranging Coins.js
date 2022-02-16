/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let start = 0;
  let end = n;
  let maxrow = 0;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let rows = (mid * (mid + 1)) / 2;
    if (rows > n) {
      end = mid - 1;
    } else {
      maxrow = mid;
      start = mid + 1;
    }
  }

  return maxrow;
};
