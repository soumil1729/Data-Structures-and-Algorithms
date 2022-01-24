var rotate = function (matrix) {
  //reversing
  const reverse = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++;
      end--;
    }
  };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[0].length; col++) {
      let temp = matrix[col][row];
      matrix[col][row] = matrix[row][col];
      matrix[row][col] = temp;
    }

    reverse(matrix[row]);
  }
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
