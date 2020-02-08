function checkPalindrome(inputString) {
  let arr = inputString.split("");

  let reverseArr = arr.reverse();
  let str = reverseArr.join("");
  return str == inputString ? true : false;
}

console.log(checkPalindrome("aabaa"));
