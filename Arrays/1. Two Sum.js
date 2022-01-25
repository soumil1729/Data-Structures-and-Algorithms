/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (obj[sum] !== undefined) return [obj[sum], i];
    else obj[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([2, 15, 11, 7], 9));
