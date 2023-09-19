'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * _.identity:
* Identity: Returns the input value unchanged.
*
* Arguments: Any value.
* Example: _.identity(5) returns 5.
 */
_.identity = function(value){
    return value
}
module.exports.each = each;

/**
 * _.typeOf:

* typeOf: Returns the type of the input value as a string, which can be one of the following: "string," "array," "object," "undefined," "number," "boolean," "null," or "function."
* Arguments: Any value.
* Example: _.typeOf(134) returns "number".
 */
_.typeOf = function(value){
    if (Array.isArray(value)){
        return 'array'
    } else if(value === null){
        return "null";
    }else {
        return typeof value;
    }
}
module.exports.each = each;

/**
 * * _.first:

Description: Returns the first element(s) of an array based on the provided number.
Arguments: An array and an optional number.
Example: _.first("ponies", 1) returns [], _.first(["a", "b", "c"], 2) returns ["a", "b"].
 */
_.first = function(array, number){
    let arr = []
    if (!Array.isArray(array)){
        return [];
    }else if (typeof number === 'string'){
        arr.push(array[0])
        return arr
    }else if (number === undefined){
       arr.push(array[0])
       return arr[0]
    }else if(number < 0){
        return [];
    } else if (number >= array.length){
        return array
    } else {
        arr = array.slice(0, number)
        }
    
    return arr
}

module.exports.each = each;

/**
 * _.last:

Description: Returns the last element(s) of an array based on the provided number.
Arguments: An array and an optional number.
Example: _.last("ponies", 2) returns [], _.last(["a", "b", "c"], 2) returns ["b", "c"].
 */

/**
 * 
 */