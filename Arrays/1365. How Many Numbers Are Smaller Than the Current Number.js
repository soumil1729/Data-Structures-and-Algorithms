var smallerNumbersThanCurrent = function (nums) {
  let count = new Int16Array(101);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    count[num] = count[num] + 1;
  }

  console.log(count);
  for (let j = 1; j <= 100; j++) {
    count[j] += count[j - 1];
  }
  console.log(count);

  for (let i = 0; i < nums.length; i++) {
    let pos = nums[i];
    nums[i] = pos == 0 ? 0 : count[pos - 1];
  }

  return nums;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 4]));
