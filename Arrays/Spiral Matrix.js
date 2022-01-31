/**
 * @param {number[][]} matrixrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let total = m * n;
  let count = 0;

  let arr = [];

  let rowMin = 0;
  let rowMax = m - 1;
  let colMin = 0;
  let colMax = n - 1;

  while (count < total) {
    //   row forwards
    for (let i = rowMin; i <= colMax && count < total; i++) {
      arr.push(matrix[rowMin][i]);
      count++;
    }

    rowMin++;

    //col downwards
    for (let i = rowMin; i <= rowMax && count < total; i++) {
      arr.push(matrix[i][colMax]);
      count++;
    }

    colMax--;

    // row backwards
    for (let i = colMax; i >= colMin && count < total; i--) {
      arr.push(matrix[rowMax][i]);
      count++;
    }

    rowMax--;

    // column upwords
    for (let i = rowMax; i >= rowMin && count < total; i--) {
      arr.push(matrix[i][colMin]);
      count++;
    }
    colMin++;
  }

  return arr;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
