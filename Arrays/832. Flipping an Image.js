/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let reverseAndFlip = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let temp = arr[start] === 0 ? 1 : 0;
      arr[start] = arr[end] === 0 ? 1 : 0;
      arr[end] = temp;
      start++;
      end--;
    }
  };

  for (let row = 0; row < image.length; row++) {
    reverseAndFlip(image[row]);
  }

  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
