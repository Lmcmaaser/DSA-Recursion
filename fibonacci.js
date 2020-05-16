/*
recursive function that prints the Fibonacci sequence of a given number
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

What is the input to the program?
  a number
What is the output of the program?
  Fibonacci sequence of a given number
What is the input to each recursive call?
  numbers
What is the output of each recursive call?
  sum of the 2 preceding numbers

*/

function FibonacciSeq(n){
  return (n < 2) ? n : FibonacciSeq(n - 1) + FibonacciSeq(n - 2)
}
