/*
recursive function that prints out the binary representation of a given number. ex. program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

What is the input to the program?
  number
What is the output of the program?
  binary representation
What is the input to each recursive call?

What is the output of each recursive call?
*/

function convertToBinary(n) {
  //base
   if(n > 0) {
      let binaryFormat = Math.floor(n % 2);
      return (convertToBinary(Math.floor(input / 2)) + binaryFormat)
    } else {
      return ''
    }
  }
