const repeatString = function(string, times) {
    if (times < 0){
    return 'ERROR'
    }
    let word = "";
    for (let i = 0; i<times; i++){
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
