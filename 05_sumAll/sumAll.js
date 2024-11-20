const sumAll = function(num1, num2) {
    // Error handling
    if((num1 < 0 || num2 < 0) || 
        (num1 % 1 != 0 || num2 % 1 != 0) ||
        (typeof num1 != 'number' || typeof num2 != 'number')
    ){
        return "ERROR";
    }

    // Init variables
    let lowest = 0;
    let highest = 0;
    let sum = 0;

    if(num1 > num2){
        highest = num1;
        lowest = num2;
    }
    else{
        lowest = num1;
        highest = num2;
    }

    const numbers = [];
    for(let i = lowest; i < highest+1; i++){
        numbers.push(i);
    }

    numbers.forEach(num =>{
        sum += num;
    })
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
