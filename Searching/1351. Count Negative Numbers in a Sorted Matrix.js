/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let r = 0;
  let c = grid[0].length - 1;
  let count = 0;
  let n = grid.length;
  while (r < n && c >= 0) {
    if (grid[r][c] < 0) {
      count += n - r;
      c--;
    } else {
      r++;
    }
  }
  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegatives([
    [5, 1, 0],
    [-5, -5, -5],
  ])
);
