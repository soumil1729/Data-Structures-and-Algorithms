var findNumbers = function (nums) {
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = Math.floor(Math.log10(nums[i]) + 1);
    if (count % 2 === 0) even++;
  }
  return even;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
