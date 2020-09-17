const removeFromArray = function(arr, ...moreArgs) {

    let args = Array.prototype.slice.call(arguments);
    args.splice(0,1); //le quito el 1er elemento que es el array con el cual debo comparar

    let indexOfElement = 0;

    for(let i = 0 ; i < args.length; i++){
        
        indexOfElement = arr.indexOf(args[i]);
        
        // chequeo si el elemento existe o no 
        if (indexOfElement < 0 || typeof(args[i]) !== typeof(arr[indexOfElement])) continue;

        arr.splice(indexOfElement, 1);
    
    }
    return arr;

    /* Example with rest parameter

    let indexToEliminate;

    for( let i = 0; i < moreArgs.length; i++){
        
        indexToEliminate = arr.indexOf(moreArgs[i]);
        if(indexToEliminate === -1) continue;

        arr.splice(indexToEliminate, 1);
    }

    return arr; */
}

module.exports = removeFromArray
