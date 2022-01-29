/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let f = 0;
  for (let s = 1; s < nums.length; s++) {
    if (nums[f] !== nums[s]) {
      f++;
      nums[f] = nums[s];
    }
  }
  return nums, f + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 4, 7]));
console.log(removeDuplicates([1, 1, 2, 3]));
