/**
 * Object from key-value pairs (根據鍵值對創建對象)
 */

// ES6
const objectFromPairs = arr => 
    arr.reduce((a, v) => (a[v[0]] = v[1], a), {});
// ES5
"use strict";
var objectFromPairs = function objectFromPairs(arr) {
    return arr.reduce(function (a, v) {
        console.log(a);
        console.log(v[0]);
        return a[v[0]] = v[1], a;
    }, {});
};
//objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}

/**
 * Object to key-value pairs (對象轉化為鍵值 )
 */
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

/**
 * Shallow clone object (淺複製對象)
 */
const shallowClone = obj => Object.assign({}, obj);
/*
const a = { x: true, y: 1 };
const b = shallowClone(a);
a === b -> false
http://www.css88.com/archives/8319
*/
