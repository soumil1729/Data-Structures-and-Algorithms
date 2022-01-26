/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let ans = 0;

  for (let row = 0; row < matrix.length; row++) {
    let max = +Infinity;
    let indx;
    let flag = true;

    for (let col = 0; col < matrix[0].length; col++) {
      if (max > matrix[row][col]) {
        max = matrix[row][col];
        indx = col;
      }
    }

    //cols
    for (let i = 0; i < matrix.length; i++) {
      if (max < matrix[i][indx]) {
        flag = false;
        break;
      }
    }

    if (flag) ans = max;
  }

  return ans;
};

var luckyNumbers3 = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let maxMin = -Infinity;

  for (let row = 0; row < matrix.length; row++) {
    let min = +Infinity;
    for (let col = 0; col < matrix[0].length; col++) {
      min = Math.min(min, matrix[row][col]);
      maxMin = Math.max(maxMin, min);
    }
  }
  let minMax = +Infinity;

  for (let row = 0; row < matrix.length; row++) {
    let max = -Infinity;
    for (let col = 0; col < matrix[0].length; col++) {
      max = Math.max(max, matrix[col][row]);
    }
    minMax = Math.min(minMax, max);
  }
  if (maxMin != minMax) return [];
  return [maxMin];
};

var luckyNumbers2 = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let rows = new Array(n).fill(+Infinity);
  let cols = new Array(m).fill(-Infinity);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      rows[i] = Math.min(rows[i], matrix[i][j]);
      cols[j] = Math.max(rows[i], matrix[i][j]);
    }
  }

  let ans = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows[i] === matrix[i][j] && cols[j] == matrix[i][j]) {
        ans.push(matrix[i][j]);
      }
    }
  }
  return ans;
};

console.log(
  luckyNumbers2([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
