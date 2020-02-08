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
