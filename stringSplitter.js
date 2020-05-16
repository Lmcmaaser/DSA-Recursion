/*recursive function that split a string based on a separator
Input: 02/20/2020
Output: 02202020

What is the input to the program?
  string, seperator (02/20/2020)
What is the output of the program?
  new string (02202020)
What is the input to each recursive call?
  seperator
What is the output of each recursive call?
  new string


*/

function stringSplitter(str, del){
  // base
  if(str === ''){
    return str;
  } else if (str.charAt(0) === del){
    return stringSplitter(str.substr(1), del)
  } else {
    return str.charAt(0) + stringSplitter(str.substr(1), del);
  }
}
