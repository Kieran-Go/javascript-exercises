const reverseString = function(word) {
    let stringArray = [];
    let reversedWord = "";
    for(let i = word.length; i > -1; i--){
        reversedWord+= word.charAt(i);
    }
    return reversedWord;


};

// Do not edit below this line
module.exports = reverseString;
