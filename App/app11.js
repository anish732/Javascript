/**Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 *
 * Solution 1
 */

function adjacentElementsProduct(inputArray) {
  var x = 0;
  var y = 0;
  var p = Number.MIN_SAFE_INTEGER;

  for (var i = 0; i < inputArray.length; i++) {
    x = inputArray[i];
    y = inputArray[i + 1];
    if (x * y > p) {
      p = x * y;
    }
  }
  return p;
}
/************************************************************ */

/**Solution 2 */

function adjacentElementsProduct(inputArray) {
  var product = inputArray[0] * inputArray[1];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > product) {
      product = inputArray[i] * inputArray[i + 1];
    }
  }
  return product;
}
