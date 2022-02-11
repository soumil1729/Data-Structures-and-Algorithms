/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    const result = myguess(mid);

    if (result === 0) {
      return mid;
    } else if (result === -1) {
      high = mid - 1;
    } else low = mid + 1;
  }
};

// 1 2 3 4 5 6 7 8 9 10

var guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let mid1 = Math.floor(low + (high - low) / 3);
    let mid2 = Math.floor(high - (high - low) / 3);

    let res1 = guess(mid1);
    let res2 = guess(mid2);

    if (res1 == 0) return mid1;
    if (res2 == 0) return mid2;
    else if (res1 < 0) high = mid1 - 1;
    else if (res2 > 0) low = mid2 + 1;
    else {
      low = mid1 + 1;
      high = mid2 - 1;
    }
  }
};
