function solution(inputArray) {
    let longestString = [];
    inputArray.forEach(sentence => {
        console.log("sentence", sentence);
       if(longestString[0].length < sentence.length){
        longestString = []
        longestString.push(sentence);
        console.log("longestString", longestString);
       }else if(longestString[0].length === sentence.length){
        longestString.push(sentence);
        console.log("longestString 2", longestString);
       }else{
        console.log("else", sentence);
       }
    });
    
}


// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }


function solution2(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}