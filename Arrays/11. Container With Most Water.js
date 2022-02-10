/**
 * @param {number[]} height
 * @return {number}
 */

//bruteforce
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 1; j < height.length; j++) {
      let small = Math.min(height[i], height[j]);
      small *= j - i; //area
      max = Math.max(max, small);
    }
  }
  return max;
};

//optimize
var maxArea2 = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start < end) {
    let smallH = Math.min(height[start], height[end]);
    smallH *= end - start;
    max = Math.max(max, smallH);

    if (height[start] <= height[end]) start++;
    else end--;
  }
  return max;
};

console.log(maxArea2([1, 1, 1, 1]));
console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
