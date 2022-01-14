/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */

// brureforce approach
var oddCells = function (m, n, indices) {
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < indices.length; i++) {
    let pos = indices[i];
    let row = pos[0];
    let col = pos[1];

    //         row operatons
    for (let c = 0; c < n; c++) {
      arr[row][c] += 1;
    }

    //         col operation
    for (let r = 0; r < m; r++) {
      arr[r][col] += 1;
    }
  }

  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] % 2 !== 0) odd++;
    }
  }

  return odd;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);

// optimised
var oddCellsx = function (m, n, indices) {
  let row = new Array(m).fill(0);
  let col = new Array(n).fill(0);

  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]]++;
    col[indices[i][1]]++;
  }
  console.log(row, col);

  let odd = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if ((row[r] + col[c]) % 2 !== 0) {
        odd++;
      }
    }
  }
  return odd;
};

console.log(
  oddCellsx(2, 3, [
    [0, 1],
    [1, 1],
  ])
);
