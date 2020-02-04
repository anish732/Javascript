/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items
without any elements with the same value next to each other and preserving the original order of elements.
 ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message) {
  var str = "";
  for (var i = 0; i < message.length; i++) {
    var num = message[i].charCodeAt();
    if (num >= 65 && num <= 77) {
      str += String.fromCharCode(num + 13);
    } else if (num >= 78 && num <= 90) {
      str += String.fromCharCode(num - 13);
    } else if (num >= 97 && num <= 109) {
      str += String.fromCharCode(num + 13);
    } else if (num >= 110 && num <= 122) {
      str += String.fromCharCode(num - 13);
    } else {
      str += message[i];
    }
  }
  return str;
}

rot13();
