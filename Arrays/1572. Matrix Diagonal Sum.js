/**
 * @param {number[][]} mat
 * @return {number}
 */

// burteforece
var diagonalSum = function (mat) {
  let sum = 0;
  let n = mat.length - 1;
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[0].length; c++) {
      if (r === c) sum += mat[r][c];
      if (r === n - c) sum += mat[r][c];
    }
  }
  if (n % 2 === 0) sum -= mat[n / 2][n / 2];
  return sum;
};

//optimise

var diagonalSum = function (mat) {
  let sum = 0;
  let n = mat.length - 1;
  for (let row = 0; row < mat.length; row++) {
    sum += mat[row][row] + mat[row][n - row];
  }
  if (n % 2 === 0) sum -= mat[n / 2][n / 2];
  return sum;
};
