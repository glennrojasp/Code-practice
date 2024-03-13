function solution(num) {
    let counter = 0;
    let sum1=0 , sum2 =0;
    let myArr = String(num).split("").map((num) => {
        return Number(num)
    })
    
    console.log("myArr", myArr);
    console.log("sum1", sum1);
    console.log("sum2", sum2);
    myArr.forEach(num => {
        
        console.log("num", num);
        if(counter < (myArr.length/2)){
            sum1=sum1+num;
        }else {
            sum2=sum2+num;
        }
        counter++;
        console.log("sum1", sum1);
        console.log("sum2", sum2);
    });
    
    if(sum1 === sum2){
        return true;
    }else {
        return false;
    }
    
}

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.



function solution(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}

function solution(n) {
    var s = n.toString();
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < s.length/2; i++){
        sum1 += parseInt(s[i]);
        sum2 += parseInt(s[s.length-i-1]);        
    }    
    return sum1 == sum2;
}