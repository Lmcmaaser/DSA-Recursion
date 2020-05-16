/*
Calculate the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers (non-negative integers, counting numbers) from 1 to n.
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

What is the input to the program?
  number of dots
What is the output of the program?
  nth triangular number
What is the input to each recursive call?
  the triangular number sequence
What is the output of each recursive call?
  nth triangular number
*/

function nthTriangle(n){
  return (n <= 1) ? n : n + nthTriangle(n - 1);
}
