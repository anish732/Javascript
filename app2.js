/**Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

You may assume that the input will always be valid.
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0


*********************************************************/

var lastDigit = function(str1, str2) {
  let lastNumber = str1.slice(-1);
  let numberTwo = str2.slice(-2);
  if (str2 == 0) {
    return 1;
  } else if (str2.length == 1) {
    let p = Math.pow(lastNumber, str2).toString();
    return parseInt(p.slice(-1));
  } else if (
    lastNumber == 2 ||
    lastNumber == 3 ||
    lastNumber == 7 ||
    lastNumber == 8
  ) {
    let x = numberTwo % 4;
    if (x !== 0) {
      let y = Math.pow(lastNumber, x);
      let z = parseInt(y.toString().slice(-1));
      return z;
    } else if ((x == 0 && lastNumber == 2) || (x == 0 && lastNumber == 8)) {
      return 6;
    } else if ((x == 0 && lastNumber == 3) || (x == 0 && lastNumber == 7)) {
      return 1;
    }
  } else if (lastNumber == 4 || lastNumber == 9) {
    let a = numberTwo % 2;
    if (a == 0 && lastNumber == 4) {
      return 6;
    } else if (a == 0 && lastNumber == 9) {
      return 1;
    } else {
      let b = Math.pow(lastNumber, a);
      let c = parseInt(b.toString().slice(-1));
      return c;
    }
  } else if (lastNumber == 5) {
    return 5;
  } else if (lastNumber == 6) {
    return 6;
  } else if (lastNumber == 1) {
    return 1;
  } else {
    return 0;
  }
};
