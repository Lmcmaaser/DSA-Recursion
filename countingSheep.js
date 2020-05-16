/*
What is the input to the program?
  Input: 3
What is the output of the program?
  Output:
  3: Another sheep jumps over the fence
  2: Another sheep jumps over the fence
  1: Another sheep jumps over the fence
  All sheep jumped over the fence
What is the input to each recursive call?
  number of sheep
What is the output of each recursive call?
  number of sheep and output message
*/

function CountingSheep(sheep){
  //base case
 if(sheep === 0){
    return console.log('All sheep jumped over the fence');
 } else {
    console.log(sheep, 'Another sheep jumps over the fence');
   return CountingSheep(sheep)
 }
}

CountingSheep(3);
