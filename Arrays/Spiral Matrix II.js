/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let total = n * n;
  let count = 1;

  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }

  let rowMin = 0;
  let rowMax = n - 1;
  let colMin = 0;
  let colMax = n - 1;

  while (count <= total) {
    //   row forwards
    for (let i = rowMin; i <= colMax && count <= total; i++) {
      arr[rowMin][i] = count;
      count++;
    }

    rowMin++;

    //col downwards
    for (let i = rowMin; i <= rowMax && count <= total; i++) {
      arr[i][colMax] = count;
      count++;
    }

    colMax--;

    // row backwards
    for (let i = colMax; i >= colMin && count <= total; i--) {
      arr[rowMax][i] = count;
      count++;
    }

    rowMax--;

    // column upwords
    for (let i = rowMax; i >= rowMin && count <= total; i--) {
      arr[i][colMin] = count;
      count++;
    }
    colMin++;
  }

  return arr;
};

console.log(generateMatrix(4));
