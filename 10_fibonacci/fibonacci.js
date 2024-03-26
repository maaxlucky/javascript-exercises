const fibonacci = function(target){
    if (typeof(target) === 'string'){
        target = parseInt(target)
    }
    if (target < 0){
        return 'OOPS'
    }
    if(target === 1){
        return 1
    }
    if(target === 0){
        return 0
    }
    else {
        return fibonacci(target-1) + fibonacci(target-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
