/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let ans = [];
  let end = num.length - 1;
  let add = k;

  while (end >= 0 || add > 0) {
    if (end >= 0) add = num[end] + add;
    ans.push(add % 10);
    add = Math.floor(add / 10);
    end--;
  }

  ans.reverse();
  return ans;
};

console.log(addToArrayForm([2, 1, 5], 806));
