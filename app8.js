/**A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
removeNb(26), [[15,21], [21,15]]);
removeNb(100), []);

**************************************************************************************************/
/**Solution 1 */

const removNb = n => {
  let sum = (n * (n + 1)) / 2;

  for (var k = 1; k <= n; k++) {
    for (var l = k + 1; l <= n; l++) {
      if (k * l == sum - (k + l)) {
        return [
          [k, l],
          [l, k]
        ];
      }
    }
  }
  return [];
};

console.log(removNb(26));

/*********************************************************************************************** */
/**Solution 2 */
