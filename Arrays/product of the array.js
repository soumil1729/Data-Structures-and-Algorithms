/**
 * @param {number[]} nums
 * @return {number[]}
 */

// o(n) & o(n + m + z)space
var productExceptSelf = function (nums) {
  let n = nums.length;
  let preFix = new Array(n);
  let postFix = new Array(n);

  preFix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    preFix[i] = preFix[i - 1] * nums[i];
  }

  postFix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    postFix[i] = postFix[i + 1] * nums[i];
  }

  let ans = [];
  ans[0] = postFix[1];
  for (let i = 1; i < n - 1; i++) {
    ans[i] = preFix[i - 1] * postFix[i + 1];
  }
  ans[n - 1] = preFix[n - 2];
  return ans;
};

// o(1) space
var productExceptSelf2 = function (nums) {
  let n = nums.length;
  let ans = new Array(n);

  // preFix[0] = nums[0];

  ans[0] = nums[0];
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * nums[i];
  }

  console.log(ans, nums);

  let product = 1;
  for (let i = n - 1; i > 0; i--) {
    ans[i] = product * ans[i - 1];
    product *= nums[i];
  }
  ans[0] = product;

  return ans;
};
//  1  2  3  4
//  24 24 12 4
console.log(productExceptSelf2([4, 3, 2, 1, 2]));
console.log(productExceptSelf2([1, 2, 3, 4]));
//
