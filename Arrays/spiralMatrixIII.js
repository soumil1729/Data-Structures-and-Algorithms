/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let total = rows * cols;
  let matrix = new Array(total).fill(new Array(2));

  let count = 0;
  matrix[count++] = [rStart, cStart];

  let direction = [0, 1, 0, -1, 0];
  let d = 0;
  let len = 0;

  while (count < total) {
    if (d === 0 || d === 2) {
      len++;
    }

    for (i = 0; i < len; i++) {
      rStart += direction[d];
      cStart += direction[d + 1];
      if (rStart < rows && cStart < cols && rStart >= 0 && cStart >= 0) {
        matrix[count] = [rStart, cStart];
        count++;
      }
    }
    d = ++d % 4;
  }

  return matrix;
};

console.log(spiralMatrixIII(3, 3, 0, 0));
console.log(spiralMatrixIII(1, 4, 0, 0));
