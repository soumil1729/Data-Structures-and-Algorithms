/**
 * @param {number[][]} logs
 * @return {number}
 */

//bruteforce
var maximumPopulation = function (logs) {
  let arr = new Array(100).fill(0);

  const updateArr = function (start, end) {
    for (let i = start; i < end; i++) {
      arr[i]++;
    }
  };

  for (let i = 0; i < logs.length; i++) {
    let start = logs[i][0] - 1950;
    let end = logs[i][1] - 1950;
    updateArr(start, end);
  }

  let max = 0;
  let indx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      indx = i;
    }
  }

  return 1950 + indx;
};

console.log(
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ])
);

console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);

//optimise
var maximumPopulation2 = function (logs) {
  let arr = new Array(100).fill(0);

  for (let i = 0; i < logs.length; i++) {
    arr[logs[i][0] - 1950]++;
    arr[logs[i][1] - 1950]--;
  }

  //using running sum
  let sum = 0;
  let max = 0;
  let year = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;

    if (max < arr[i]) {
      max = arr[i];
      year = 1950 + i;
    }
  }

  return year;
};

console.log(
  maximumPopulation2([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);
