/*
What is the input to the program?
  string
What is the output of the program?
  string
What is the input to each recursive call?
  string
What is the output of each recursive call?
  the input string reversed
*/

function reverseString(str){
  // base case
  if (str === '') {
    return ''
  }  else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
