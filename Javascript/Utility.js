/**
 * Hexcode to RGB (Hex轉RGB)
 */
const hexToRgb = hex => `rgb(${hex.slice(1).match(/.{2}/g).map(x => parseInt(x, 16)).join()})`
//hexToRgb('#27ae60') -> 'rgb(39,174,96)'

/**
 * RGB to hexadecimal(RGB轉hex)
 */
const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
// rgbToHex(255, 165, 1) -> 'ffa501'

/**
 * Is array(是否微陣列)
 */
const isArray = val => !!val && Array.isArray(val);
// isArray(null) -> false
// isArray([1]) -> true

 /**
 * Is boolean(是否為布林)
 */
const isBoolean = val => typeof val === 'boolean';
// isBoolean(null) -> false
// isBoolean(false) -> true

 /**
 * Is function(是否為函數)
 */
const isFunction = val => val && typeof val === 'function';
// isFunction('x') -> false
// isFunction(x => x) -> true

 /**
  * Is number
 */
const isNumber = val => typeof val === 'number';
// isNumber('1') -> false
// isNumber(1) -> true

/**
  * Is string
 */
const isString = val => typeof val === 'string';
// isString(10) -> false
// isString('10') -> true

/**
  * Measure time taken by function (計算函數執行所花費的時間)
 */
const timeTaken = callback => {
    console.time('timeTaken');
    const r = callback();
    console.timeEnd('timeTaken');
    return r;
  };
  //timeTaken(() => Math.pow(2, 10)) -> 1024
  //(logged): timeTaken: 0.02099609375ms

  /**
   * Number to array of digits (將數字轉化為陣列)
   */
  const digitize = n => (''+n).split('').map(i => parseInt(i));
// digitize(2334) -> [2, 3, 3, 4]

/**
 * URL parameters(網址參數)
 */
const getUrlParameters = url =>
  url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  );
// getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}

/**
 * UUID generator (UUID生成器)
 * 使用 crypto API 生成一個 UUID，符合RFC4122 版本 4
 */
const uuid = _ =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
// uuid() -> '7982fcfe-5721-4632-bede-6000885be57d'

/**
 * Validate email(信箱驗證)
 */
const validateEmail = str =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
// validateEmail(mymail@gmail.com) -> true

/**
 * Validate number (數字驗證)
 */
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
// validateNumber('10') -> true

/**
 * Value or default (值或者默認值)
 */
const valueOrDefault = (value, d) => value || d;
// valueOrDefault(NaN, 30) -> 30
