/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// o(m+n) space
var setZeroes = function (matrix) {
  let arr = [];
  let m = matrix.length;
  let n = matrix[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) arr.push(row, col);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    let col = arr[++i];

    // rows
    for (let i = 0; i < n; i++) {
      matrix[row][i] = 0;
    }

    // col
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }
  return matrix;
};

//O(1)space o(n * m)
var setZeroes2 = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let col0 = 1;

  for (let row = 0; row < m; row++) {
    if (matrix[row][0] === 0) col0 = 0;
    for (let col = 1; col < n; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
    if (col0 === 0) matrix[row][0] = 0;
  }

  return matrix;
};
