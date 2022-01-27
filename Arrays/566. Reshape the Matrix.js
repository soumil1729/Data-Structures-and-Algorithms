/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// bruteforce
var matrixReshape = function (mat, r, c) {
  let n = mat.length;
  let m = mat[0].length;

  if (n * m !== r * c) return mat;

  let arr = new Array(r);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(c);
  }

  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans.push(mat[i][j]);
    }
  }

  let x = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      arr[i][j] = ans[x];
      x++;
    }
  }
  return arr;
};

// slightly optimised
var matrixReshape2 = function (mat, r, c) {
  let n = mat.length;
  let m = mat[0].length;

  if (n * m !== r * c) return mat;

  let arr = new Array(r);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(c);
  }

  let i = 0;
  let j = 0;
  for (let row = 0; row < r; row++) {
    for (let col = 0; col < c; col++) {
      arr[row][col] = mat[i][j];
      j++;
      if (j === m) {
        j = 0;
        i++;
      }
    }
  }
  return arr;
};

console.log(
  matrixReshape2(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    2,
    6
  )
);
