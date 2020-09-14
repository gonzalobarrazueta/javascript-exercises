const reverseString = function(s) {

    let sReversed = '';

    for(let i = s.length -1; i > -1; i--){

        sReversed += s[i];
    }
    
    return sReversed;
}

module.exports = reverseString
