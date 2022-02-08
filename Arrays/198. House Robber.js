/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let inc = nums[0];
  let exc = 0;

  for (let i = 1; i < nums.length; i++) {
    let nInc = exc + nums[i];
    let nExc = Math.max(exc, inc);

    inc = nInc;
    exc = nExc;
  }

  return Math.max(inc, exc);
};

console.log(rob([2, 1, 1, 2, 3, 4]));
//               0  1  2  3  4   5
console.log(rob([2, 1, 1, 2]));

console.log(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3]));
