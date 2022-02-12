/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    let contain = target - nums[i];
    if (hashmap[contain] >= 0) return [hashmap[contain], i];
    else hashmap[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
