/*
What is the input to the program?
  integer as a base, and another integer as an exponent
What is the output of the program?
  value of the base raised to the power of the exponent
What is the input to each recursive call?
  exponenet
What is the output of each recursive call?


takes two parameters:
  an integer as a base,
  integer as an exponent.
The function returns the value of the base raised to the power of the exponent. Use only positive numbers
powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0
*/

function PowerCalculator(base, exp) {
    //filters non-positive integer parameters
    if(exp < 0){
         console.log('exponent should be >= 0');
    return null;
    //multiply base by 1 if exponenet is 1
} else if (exp === 1){
        return base;
    } else {
        base = base * base;
        return PowerCalculator(base, exp - 1);
    }
}
