/**A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
 The range includes all integers in the interval including both endpoints. 
It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17") 
ex. solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"*/

function solution(list) {
  ranges = [[list[0], list[0]]];
  lastIndex = 0;

  for (var i = 1; i < list.length; i++) {
    if (list[i] - ranges[lastIndex][1] == 1) {
      ranges[lastIndex][1] = list[i];
    } else {
      ranges[++lastIndex] = [list[i], list[i]];
    }
  }
  return ranges;
}

console.log(
  solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
    21,
    22
  ])
);
