const repeatString = function(repeatedString, repetitionNumber) {


    let s = (repetitionNumber < 0) ? 'ERROR' : '';

    for( let  i = 0; i < repetitionNumber; i++){

        s += repeatedString;
    }

    return s;
}

module.exports = repeatString
