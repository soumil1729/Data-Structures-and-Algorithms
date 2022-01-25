/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  let norotation = true;
  let first = true;
  let second = true;
  let third = true;
  let len = mat.length - 1;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      //no rotation
      if (mat[row][col] !== target[row][col]) norotation = false;

      //1st rotation
      if (mat[row][col] !== target[col][len - row]) first = false;

      //2nd rotation
      if (mat[row][col] !== target[len - row][len - col]) second = false;

      //3rd rotation
      if (mat[row][col] !== target[len - col][row]) third = false;
    }
  }
  return first || second || third || norotation;
};
