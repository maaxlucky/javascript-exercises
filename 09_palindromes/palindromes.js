const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.replace(/,/g, '').replace(".", "").toLowerCase()
    let reversedString = str.split(" ").join("")
    reversedString = reversedString.split("")
        .reverse()
        .join("")
    str = str
        .split(" ").
        join("").replace(/,/g, '')
    for(let indexLetter in str){
        if(str[indexLetter] === reversedString[indexLetter]){
        }
        else {return false}
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
