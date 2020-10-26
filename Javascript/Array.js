/**
 * Array concatenation (陣列拼接)
 * 使用 Array.concat()，通過 args中附加任何陣列合值來拼接一個陣列
 */
const ArrayConcat = (arr, ...args) => [].concat(arr, ...args);
//console.log(ArrayConcat([1], [1,2,3, [4]])); > [ 1, 1, 2, 3, [ 4 ] ]

/**
 * Array difference (陣列比較)
 * 根據陣列 b創建一個 Set的對象，然後在陣列 a上使用 Array.filter()方法
 * ，過濾出陣列 b不包含的值
 */
const difference = (a, b) => { 
    const s = new Set(b); 
    return a.filter(x => !s.has(x));
}
//console.log(difference([1,2,3], [1,2])); > [3]

/**
 * Array intersection  (陣列交集)
 */
const intersection  = (a, b) => { 
    const s = new Set(b);
    return a.filter(x => s.has(x));
}
//console.log(intersection([1,2,3], [4,3,2])); > [ 2, 3 ]

/**
 * Array remove (移除陣列的元素)
 */
const remove = (arr, func) => 
    Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
    }, []) : [];
//console.log(remove([1, 2, 3, 4], n => n % 2 ==0 )); > [ 2, 4 ]

/**
 * Array sample (陣列隨機取1個元素)
 * 
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
//console.log(sample([3,7,9,11])) > 7

/**
 * Array union (數組結合)
 * 用陣列 a 和 b 的所有值創建一個 Set 對象，並轉換成一個陣列。
 */
const union = (a, b) => Array.from(new Set([...a, ...b]));
//console.log(union([1,2,3], [4,5,6,1,2,3,7] )); > [ 1, 2, 3, 4, 5, 6, 7 ]

/**
 * Array without (從陣列中排除給定值)
 */
const without = (arr, ...args) => arr.filter(v => args.indexOf(v) === -1);
// without([2, 1, 2, 3], 1, 2) -> [3]
// without([2, 1, 2, 3, 4, 5, 5, 5, 3, 2, 7, 7], 3, 1, 5, 2) -> [ 4, 7, 7 ]

/**
 * Compact (過濾掉陣列中所有假值元素)
 */
const compact = (arr) => arr.filter(v => v);
// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]

/**
 * Count occurrences of a value in array (計算陣列中某個值的出現次數)
 */
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3

/**
 * Deep flatten array (深度平舖陣列)
 * 使用遞迴。 通過空陣列([]) 使用 Array.concat() ，结合 展開運算符( ... ) 來平鋪陣列。
 * 遞迴平鋪每個陣列元素。
 */
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));
//console.log(deepFlatten([1,[2],[[3],4],5])); > [ 1, 2, 3, 4, 5 ]

/**
 * Fill array (填充陣列)
 */
const fillArray = (arr, value, start = 0, end = arr.length) =>
  arr.map((v, i) => i >= start && i < end ? value : v);
// fillArray([1,2,3,4],'8',1,3) -> [1,'8','8',4]

/**
 * Get max value from array (獲取陣列中的最大值)
 */
const arrayMax = arr => Math.max(...arr);
// arrayMax([10, 1, 5]) -> 10

 /**
  * Get min value from array (獲取陣列中的最小值)
  */
 const arrayMin = arr => Math.min(...arr);
// arrayMin([10, 1, 5]) -> 1

/**
 * Group by (陣列分组)
 */
const groupBy = (arr, func) =>
  arr.map(typeof func === 'function' ? func : val => val[func])
    .reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {});
// groupBy([6.1, 4.2, 6.3], Math.floor) -> {4: [4.2], 6: [6.1, 6.3]}
// groupBy(['one', 'two', 'three'], 'length') -> {3: ['one', 'two'], 5: ['three']}

/**
 * Initialize array with range (初始化特定範圍的陣列)
 */
const initializeArrayRange = (end, start = 0) =>
  Array.apply(null, Array(end - start)).map((v, i) => i + start);
// initializeArrayRange(5) -> [0,1,2,3,4]

/**
 * Initialize array with values (初始化特定範圍和值的陣列)
 */
const initializeArray = (n, value = 0) => Array(n).fill(value);
// initializeArray(5, 2) -> [2,2,2,2,2]

/**
 * Pick(提取)
 */
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
// pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']) -> { 'a': 1, 'c': 3 }
// pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])['a'] -> 1

/**
 * Shuffle array (隨機排列陣列)
 */
const shuffle = arr => arr.sort(() => Math.random() - 0.5);
// shuffle([1,2,3]) -> [2,3,1]

/**
 * Sum of array of numbers (數字陣列加總)
 */
const sum = arr => arr.reduce((acc, val) => acc + val, 0);
// sum([1,2,3,4]) -> 10

/**
 * Unique values of array (陣列過濾重複)
 */
const unique = arr => [...new Set(arr)];
// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]