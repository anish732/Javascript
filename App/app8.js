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

/*********************************************************************************************** /
/**Solution 2 

const removeNb = n => {
  let sum = 0;
  sum = (n * (n + 1)) / 2;
  console.log(sum);
  let a;

  for (var k = 1; k <= n; k++) {
    a = k;
  }

  let y = (sum - a) / (a + 1);

  return [a, y];
};

console.log(removeNb(26));
/****************************************************** 


function checkPalindrome(inputString) {
  let arr = inputString.split("");

  let reverseArr = arr.reverse();
  console.log(reverseArr);
  let str = reverseArr.join("");
  console.log(str);
  if (inputString == str) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("aabc"));

/*************************************************************************************** */

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

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
