/**
 * @param {number[]} nums
 * @return {number}
 */

/*
The problem statement says ; every  alternating element should be same, in the same time the adjacent element should not be same. Keeping the  minimum number of operations. And operations are just; every time a number is changed it cost us 1 operation.

```
[3,  1,  3,  2,  4,  3]          -> output  [3, 1, 3, 1, 3, 1]
 0   1   2   3   4   5 
```
 
By observation we can say that; numbers at index of 0 , 2 , 4 should be same and same goes to 1 , 3 , 5.
So we can conclude if we make all the **even** element same and  all the **odd** element same we can make the array alternating, in the same time even and odd **!=** each other.
So the intuition can be;  finding out the **maximum frequency** in the even and odd places.
In the example:
Freq of  num 3 is 2 ||  4 is 1   for even place.
Out task to keep the operations to a minimum. So its quite obvious that chainging the number 4 to 3 will cost us less ( 1 operation) operation as compare to 3 to 4 ( 2 operations).
Freq of  num 1 is 1 || 2 is 1 || 3 is 1   for odd place.
Here the frequency is same for all the numbers so we can pick any one and change it. So we pick 1 and change the rest of the odd places to 1 and its cost us 2 operation.

**Total number** of operation is **3**.
we can calculate the number of operation to be done by this formula:

```
                                  (n - freqMaxEven - freqMaxOdd)
The formula is; we are substracting the number of elements we dont want to change in array 
to the total number of elements in the array.
1.  where n is the total number of element in the array .
2.  freqMaxEven is most occured element in even places.
3.  freqMaxOdd is most occured element in odd places.
```

But here comes a catch! what if the most occured element in even and odd place is same
eg:
```
[1, 1, 3, 2, 1, 1, 4, 1, 1, 2 , 3 ]
 0  1  2  3  4  5  6  7  8  9  10
In even place:           ||   in odd place:
1 : 3 times (0,4,8)       ||   1 : 3 times(1,5,7)
3 : 2 times (2,10)        ||   2 : 2 times  (3,9)    
4 : 1 time(6)
```
Here our formula will fail beacause the most occured number in the both **odd** and **even** is **1** ; and we know that our adjacent should not be equal to each other.
So our intuition can be to find the second most occured number. Because we cant keep **1**  in both adjacent places.
The second most occured element is even is  3 -> 2 time and in odd is 2 -> 2 time,
Here we will have two cases:
1.  Pick **1**(first most occurring) in even and pick **2**(second most occurring) in odd.
	` (n - freqFirstMaxEven - freqSecMaxOdd)`

2. Pick **3**(second most occurring) in even and pick **1**(first most occurring) in odd.
	`(n - freqSecMaxEven - freqFirstMaxOdd)`

and then return which ever is the minimum.


*/
var minimumOperations = function (nums) {
  //its been given that nums.length goes upto 10^5
  let freqofEven = new Array(100001).fill(0);
  let freqofOdd = new Array(100001).fill(0);
  let n = nums.length;

  // storing the of frequency of even and odd places
  //maxnum is just for complexity so that we dont have to traverse the whole freq array
  let maxnum = nums[0];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) freqofEven[nums[i]]++;
    else freqofOdd[nums[i]]++;
    maxnum = Math.max(maxnum, nums[i]);
  }

  let fMaxEven = 0;
  let sMaxEven = 0;
  let freqFirstMaxEven = 0;
  let freqSecMaxEven = 0;

  let fMaxOdd = 0;
  let sMaxOdd = 0;
  let freqFirstMaxOdd = 0;
  let freqSecMaxOdd = 0;

  //logic for finding the first and second most occured number
  for (let i = 0; i <= maxnum; i++) {
    //even
    if (freqofEven[i] > freqFirstMaxEven) {
      freqSecMaxEven = freqFirstMaxEven;
      sMaxEven = fMaxEven;
      //when find a higher freq store it in max frequency even. the element in index is the freq of that number
      freqFirstMaxEven = freqofEven[i];
      //The index is the actual number and its storing the number which has the highest frequency
      fMaxEven = i;
    } else if (freqofEven[i] > freqSecMaxEven) {
      freqSecMaxEven = freqofEven[i];
      sMaxEven = i;
    }

    // odd
    if (freqofOdd[i] > freqFirstMaxOdd) {
      freqSecMaxOdd = freqFirstMaxOdd;
      sMaxOdd = fMaxOdd;
      freqFirstMaxOdd = freqofOdd[i];
      fMaxOdd = i;
    } else if (freqofOdd[i] > freqSecMaxOdd) {
      freqSecMaxOdd = freqofOdd[i];
      sMaxOdd = i;
    }
  }

  // when most occured number in both odd and even are different
  if (fMaxEven !== fMaxOdd) return n - freqFirstMaxEven - freqFirstMaxOdd;

  //when most occured number in both odd and even are same
  return Math.min(
    n - freqFirstMaxEven - freqSecMaxOdd,
    n - freqFirstMaxOdd - freqSecMaxEven
  );
};

console.log(minimumOperations([3, 1, 3, 2, 4, 3]));
console.log(minimumOperations([1, 2, 2, 2, 2]));
// [47,35,75,49,4,1,87,32,8,70,71,15,84,51,36,67,72,37,20,89,1,54,39,63,48,5,99]
