function solution(a) {
    let arrayfilter = [];
    
    a.forEach((num, index) => {
        if(num === -1){
            arrayfilter.push(index);
        };
    });
    
    let sortedArray = a.sort((a,b) => a-b);
    let counter = arrayfilter.length;

    let resultArray =  a.map((numb, index) => {
        if(arrayfilter.includes(index)){
            return -1
            
        }else{
            let result = sortedArray[counter]
            counter++;
            return result;
            
        }
    });

    return resultArray;
}



// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].



function solution2(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })
}