// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1, s2) {
    let result = 0;
    let counter = 0;
    
    array1= s1.split("");
    array2= s2.split("");
    
    array1.forEach(letter => {
        console.log(letter);
        let counterSecond = 0;
        let breakWhile = false;
        console.log("array 1", array1);
        console.log("array2", array2);
        
        while(counterSecond < array2.length && !breakWhile){
            console.log(letter, array2[counterSecond]);
            if(letter === array2[counterSecond]){
                result++;
                array2.splice(counterSecond, 1);
                breakWhile = true;
            }
            counterSecond++;
        }
        counter++;
    })
    
    return result;
}



__________________________________________________

function solution2(s1, s2) {
    let count = 0;
    for(let i = 0; i < s1.length; i++){
        if(s2.indexOf(s1[i]) != -1){
            count++;
            s2 = s2.replace(s1[i], '');
        }
    }
    return count;
}