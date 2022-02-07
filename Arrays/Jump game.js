/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length;
  let reachable = 0;
  for (let i = 0; i < len; i++) {
    if (reachable < i) return false;

    reachable = Math.max(reachable, i + nums[i]);
  }

  return true;
};
