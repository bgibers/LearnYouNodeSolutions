/*
  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).
*/

let sum = 0

// take process args and slice the first two off.
process.argv.slice(2).forEach((val, index) => {
  sum += Number(val)
})

console.log(sum)
