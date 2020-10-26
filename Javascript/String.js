/**
 * Anagrams of string (with duplicates)
 * (字串的排列组合，带有重複項)
 */
const anagrams = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) =>
      acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
  };
//anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']

/**
 * Capitalize first letter of every word (每個字首字母為大寫)
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
//capitalizeEveryWord('hello world!') -> 'Hello World!'

/**
 * Capitalize first letter (首字母大寫)
 */
const capitalize = ([first,...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
//capitalize('myName') -> 'MyName'
//capitalize('myName', true) -> 'Myname'

/**
 * Reverse a string (反轉字串)
 */
const reverseString = str => [...str].reverse().join('');
//reverseString('foobar') -> 'raboof'

/**
 * Sort characters in string (alphabetical) 
 * (按字母順序排列字串)
 */
const sortCharactersInString = str =>
  str.split('').sort((a, b) => a.localeCompare(b)).join('');
//sortCharactersInString('cabbage') -> 'aabbceg'

/**
 * Truncate a String (截斷一個字串)
 */
const truncate = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
// truncate('boomerang', 7) -> 'boom...'