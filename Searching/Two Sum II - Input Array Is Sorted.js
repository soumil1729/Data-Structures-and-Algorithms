/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let n = numbers.length;
  let start = 0;
  let end = n - 1;

  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum < target) {
      start++;
    } else end--;
  }
};

//binary search
var twoSum2 = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  const moveright = function (start, end, target) {
    let left = start;
    let right = end;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (numbers[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };

  const moveleft = function (start, end, target) {
    let left = start;
    let right = end;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (numbers[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };

  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [start + 1, end + 1];
    else if (sum < target) {
      // move start++
      start = moveright(start, end, target - numbers[end]);
    } else {
      end = moveleft(start, end, target - numbers[start]);
    }
  }
};

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([-14, -13, -5, -2, 0, 1, 4, 8, 9], 2));
