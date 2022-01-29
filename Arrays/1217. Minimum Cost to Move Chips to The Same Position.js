/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let evenCnt = 0;
  let oddCnt = 0;

  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      evenCnt++;
    } else oddCnt++;
  }
  return Math.min(evenCnt, oddCnt);
};

console.log(minCostToMoveChips([1, 2, 2, 2, 3]));
console.log(minCostToMoveChips([10, 3, 3, 1, 6, 2, 1, 10, 6, 6]));
