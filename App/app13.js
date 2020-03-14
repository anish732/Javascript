/**Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
 * Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
 * He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed. 
 * Example:
 * For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.*/

function makeArrayConsecutive2(statues) {
  statues.sort(function(a, b) {
    return a - b;
  });
  let newArr = [];

  for (var i = statues[0]; i <= statues[statues.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr.length - statues.length;
}

console.log(makeArrayConsecutive2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*************************************************************************************************************************** */
/**Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
Sequence containing only one element is also considered to be strictly increasing.
For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]. */

function almostIncreasingSequence(sequence) {
  var found = false;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (found) {
        return false;
      }
      found = true;

      if (i === 1 || i + 1 === sequence.length) {
        continue;
      } else if (sequence[i] > sequence[i - 2]) {
        sequence[i - 1] = sequence[i - 2];
      } else if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
