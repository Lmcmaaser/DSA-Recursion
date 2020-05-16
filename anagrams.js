/*
Write a function that creates an anagram list, listing all the rearrangements of a given word.
Use a prefix to create the new words.
  ex. given "east", use "e" as a prefix and place it in front of all 6 permutations

ex. if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

What is the input to the program?
  prefix, string
What is the output of the program?
 an array with the strings
What is the input to each recursive call?
   prefix and current string??
What is the output of each recursive call?
  prefix and an array with all the current strings
*/

function anagramGram(prefix, str) {
  let newGram = prefix + str
  if (str.length <= 1) { //if the string length is less than or equal to 1
    return str
  } else if (!anagramsArr.includes(newGram)) { //if the array does not have the new string, add the new string to the array
    return anagramsArr.push(newGram)
  }
  //a for loop?
}
