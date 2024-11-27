const fibonacci = function(numArg) {

    // Convert to number if string
    let num;
    if(typeof numArg !== 'number'){
        num = parseInt(numArg);
    }
    else{
        num = numArg;
    }

    // Doesn't accept negatives
    if(num < 0) return "OOPS";
    // 0th fib is 0
    if(num === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
