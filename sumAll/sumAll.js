const sumAll = function(num1, num2) {

    if(
    (num1 < 0 || num2 < 0) ||
    (typeof(num1) !== 'number' || typeof(num2) !== 'number')
    ){
        return 'ERROR';
    }
    
    let sum = 0;
    let i;
    let n;
    
    if (num1 > num2){
        i = num2;
        n = num1;
    } else {

        i = num1;
        n = num2;
    }

    for(; i <= n; i++){
        sum += i;
    }

    return sum;
}

module.exports = sumAll
