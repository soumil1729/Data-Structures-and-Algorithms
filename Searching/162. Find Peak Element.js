var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid + 1] < arr[mid]) {
      end = mid;
    } else start = mid + 1;
  }

  return end;
};

peakIndexInMountainArray([0, 1, 0]);
