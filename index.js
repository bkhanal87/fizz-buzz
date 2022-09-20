// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.

// plan
// no interface required; user will interact using the browser console.

// inputs 
let answer = parseInt(prompt("Please enter the number you'd like to FizzBuzz up to: "));

// the user will enter data from a prompt(popup box)


// Loop from 1 to the entered number
// for (let i=1; i <=answer; i++) {
//     console.log(i);
// }

// desired output
// a list of numbers from 1 to the number the user entered

// each selected number divisible by 3 will output Fizz
// each selected number divisible by 5 will output Buzz

// each number divisible by 3 and 5 will output FizzBuzz

for (let i=1; i<=answer; i++) {
    if(i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}





