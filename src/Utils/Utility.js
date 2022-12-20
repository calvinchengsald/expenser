

/**
 * Checks if the input map has a property with value equal to targetValue. If so, return the key that contains this value, else return null;
 * @param {Object} inputMap 
 * @param {*} targetValue 
 */
function hasKeyWithValue(inputMap, targetValue){
    var retValue = null;
    Object.keys(inputMap).forEach(key=>{
        if(inputMap[key]==targetValue) retValue=key;
    })
    return retValue;
}

export {hasKeyWithValue};