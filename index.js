function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.split("").reverse().join("");
  return word === newWord ? true : false;
}

/* 
  Add your pseudocode here
  newWord = oldWord split by ("") . reverse() . join by ("")
  if newWord === oldWord return true else return false 
  
*/

/*
  Add written explanation of your solution here
  split() method will split word and make it to array then reverse will reversed then join will joion every element of the array with no space 
  then we get the reversed word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
