function isPalindrome(string) {
  let reveseredString = string.split("").reverse().join("");
  return string === reveseredString;
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false