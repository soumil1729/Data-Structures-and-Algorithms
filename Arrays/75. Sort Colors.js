/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// o(n) and o(1) space
var sortColors = function (nums) {
  let zero = 0;
  let ones = 0;
  let twos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    else if (nums[i] === 1) ones++;
    else twos++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (zero > 0) {
      nums[i] = 0;
      zero--;
    } else if (ones > 0) {
      nums[i] = 1;
      ones--;
    } else {
      nums[i] = 2;
    }
  }

  return nums;
};

// o(n) and o(1) space
var sortColors2 = function (nums) {
  let n = nums.length;
  let start = 0;
  let end = nums.length - 1;

  let swap = (i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  let indx = 0;
  while (indx <= end) {
    if (nums[indx] === 0) {
      swap(start, indx);
      start++;
    } else if (nums[indx] === 2) {
      swap(indx, end);
      end--;
      indx--;
    }
    indx++;
  }
  return nums;
};

console.log(sortColors2([2, 0, 2, 1, 1, 0]));
console.log(sortColors2([0, 1, 2, 1, 0, 2]));
console.log(sortColors2([2, 0, 1]));
