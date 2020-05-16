/*
recursive function that finds the factorial of a given number
factorial of a number can be found by multiplying that number by each number between itself and 1.
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

What is the input to the program?
  given number
What is the output of the program?
  factorial of the given number
What is the input to each recursive call?
  number and the number -1
What is the output of each recursive call?
  number multiplied by number -1
*/

function factorial(n){
  return (n === 2) ? n : n * factorial(n - 1);
}
