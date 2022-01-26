/**
 * @param {number} n
 * @return {number[]}
 */

//1st
var sumZero1 = function (n) {
  let ans = [];
  let len = Math.floor(n / 2);
  for (let i = 1; i <= len; i++) {
    ans.push(i);
    ans.push(-i);
  }

  if (n % 2 !== 0) ans.push(0);

  return ans;
};

// 2nd
var sumZero = function (n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = i * 2 - n + 1;
  }
  return ans;
};
console.log(sumZero(6));
