/**
 * @param {number[]} nums
 * @return {number}
 */
// burteforce
var firstMissingPositive2 = function (nums) {
  let smallestPositive = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (smallestPositive === nums[j]) {
        smallestPositive++;
        break;
      }
    }
  }
  return smallestPositive;
};

//o(nlogn + n) o(1) space
var firstMissingPositive3 = function (nums) {
  let n = nums.length;

  nums.sort((a, b) => a - b);
  let indx = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      if (nums[i] !== i + 1 - indx) {
        return i + 1 - indx;
      }
    } else indx++;
  }
  return n;
};

// o(n) time and o(n) space
var firstMissingPositive4 = function (nums) {
  let hashset = {};

  for (const n of nums) {
    if (n > 0) {
      hashset[n] = n;
    }
  }

  let n = Object.keys(hashset).length;

  let smallestPositive = 1;
  for (let i = 0; i < n; i++) {
    if (!hashset[smallestPositive]) {
      return smallestPositive;
    } else smallestPositive++;
  }
  return nums.length + 1;
};

// o(1) space o(n) time optimize
var firstMissingPositive = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let correctPos = nums[i] - 1; //# number 2 goes to index 1
    while (nums[i] >= 1 && nums[i] <= n && nums[i] !== nums[correctPos]) {
      let temp = nums[i];
      nums[i] = nums[correctPos];
      nums[correctPos] = temp;
      correctPos = nums[i] - 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (i + 1 !== nums[i]) return i + 1;
  }
  return n + 1;
};

// console.log(firstMissingPositive4([-4, 2, 3, 4, 1, 8, 6, 0, -1, -22]));
// console.log(firstMissingPositive4([1, 2, 3]));
// console.log(firstMissingPositive4([3, 4, -1, 1]));
// console.log(firstMissingPositive4([7, 8, 9, 11, 12]));
