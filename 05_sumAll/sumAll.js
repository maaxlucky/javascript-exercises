const sumAll = function(start, finish) {
    let sum = 0;
    if (!(typeof(finish) === 'number')){
        return 'ERROR';
    }
    if (start < 0){
        return 'ERROR';
    }
    if(start > finish){
        let c = finish
        finish = start
        start = c
    }
    for (let i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
