var tictactoe = function (moves) {
  const a = new Array(8).fill(0);
  const b = new Array(8).fill(0);
  let player;
  for (let i = 0; i < moves.length; i++) {
    let [row, col] = moves[i];
    if (i % 2 === 0) {
      player = a;
    } else {
      player = b;
    }
    player[row] += 1;
    player[col + 3] += 1;
    // primary diagnal
    if (row === col) player[6] += 1;
    // secondary diagnal
    if (row === 2 - col) player[7] += 1;
  }

  //   console.log(a, b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 3) return 'A';
    if (b[i] === 3) return 'B';
  }

  if (moves.length === 9) return 'Draw';
  else return 'Pending';
};

// console.log(
//   tictactoe([
//     [0, 0],
//     [2, 0],
//     [1, 1],
//     [2, 1],
//     [2, 2],
//   ])
// );

// console.log(
//   tictactoe([
//     [0, 0],
//     [1, 1],
//     [2, 0],
//     [1, 0],
//     [1, 2],
//     [2, 1],
//     [0, 1],
//     [0, 2],
//     [2, 2],
//   ])
// );

//ignore
// let tacMove = function (row, col, player) {
//   const rowSum = new Array(3).fill(0);
//   const colSum = new Array(3).fill(0);
//   let diag = 0;
//   let reverseDiag = 0;
//   // let player;
//   let currPlayer = player === 1 ? +1 : -1;
//   rowSum[row] += currPlayer;
//   colSum[col] += currPlayer;
//   if (row === col) diag += currPlayer;
//   if (row === 2 - col) reverseDiag += currPlayer;

//   if (
//     Math.abs(rowSum[row]) === 3 ||
//     Math.abs(colSum[col]) === 3 ||
//     diag === 3 ||
//     reverseDiag === 3
//   ) {
//     return player;
//   }
// };

// tacMove(2, 0, 0);
