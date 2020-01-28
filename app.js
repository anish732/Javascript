/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths.
 Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
 */

function sumIntervals(intervals) {
  arr = [];
  intervals.forEach(el => {
    for (let i = el[0]; i < el[1]; i++) {
      arr.push(i);
    }
  });
  arr = [...new Set(arr)];
  return arr.length;
}

sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]);

/********************************************************** */

function sum_intervals(intervals) {
  finalArr = [];

  intervals.forEach(el => {
    for (let i = el[0]; i < el[1]; i++) {
      if (finalArr.indexOf(i) == -1) {
        finalArr.push(i);
      }
    }
    return finalArr.length;
  });
}

sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]);
