/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// o(n)
var findKthPositive = function (arr, k) {
  let count = 1;
  let n = k;
  let i = 0;
  while (n > 0) {
    if (count !== arr[i]) {
      count++;
      n--;
    } else {
      count = arr[i] + 1;
      i++;
    }
  }

  return count - 1;
};

// O(logn)
var findKthPositive2 = function (arr, k) {
  if (k < arr[0]) return k;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let missing = arr[mid] - (mid + 1);
    if (missing < k) {
      start = mid + 1;
    } else end = mid - 1;
  }
  return start + k;
};

console.log(findKthPositive2([2, 3, 4, 7, 11], 5));
console.log(findKthPositive2([1], 2));
console.log(findKthPositive2([1, 2, 3, 4], 2));
