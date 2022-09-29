function curriedSum(numArgs) {
    let numbers = [];
    const _curriedSum = (arg) => {
        numbers.push(arg);
        if(numbers.length === numArgs) {
            let total = 0;
            for (let num of numbers) {
                total += num;
            }
            return total;
        } else {
            return _curriedSum
        }
    }

    return _curriedSum
}

Function.prototype.curry = function(numArgs) {
    let numsArray = [];

    const _curry = (arg) => {
        numsArray.push(arg);
        
        if(numsArray.length === numArgs) {
            return this(...numsArray);
        } else {
            return _curry;
        }
    }

    return _curry;
}