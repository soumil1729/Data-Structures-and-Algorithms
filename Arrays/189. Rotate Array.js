/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// o(1)space
var rotate = function (nums, k) {
  let n = nums.length;
  let start = 0;
  let end = n - 1;

  let r = k % n;
  if (r === n || r === 0) return nums;

  while (start < end) {
    let temp = nums[end];
    nums[end] = nums[start];
    nums[start] = temp;

    start++;
    end--;
  }

  start = 0;
  end = r - 1;

  while (start < end) {
    let temp = nums[end];
    nums[end] = nums[start];
    nums[start] = temp;
    start++;
    end--;
  }

  start = r;
  end = n - 1;

  while (start < end) {
    let temp = nums[end];
    nums[end] = nums[start];
    nums[start] = temp;
    start++;
    end--;
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// o(n) space
var rotate2 = function (nums, k) {
  let arr = new Array(nums.length);
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = nums[i];
  }

  return arr;
};

console.log(rotate2([1, 2, 3, 4], 3));
