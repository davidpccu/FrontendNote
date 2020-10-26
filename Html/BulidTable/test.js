/*function two(callback) {
  var count1 = 1;
  (callback && typeof(callback) === "function") && callback();
  console.log(count1);
}

function three() {
  console.log('three run');
}

two(function() {
  console.log('callback run');
});

two(three);
*/
/////////////////////////////////////////////////////////////////

function add() {
  var count = 0;
  return function() {
    console.log(count = count + 1);
    console.log('closure');
  };
};

add()();
// 1

// closure


add()();
// 1

// closure


var one = add();
one();
// 1

// closure
one();

///////////////////
/*
function foo(somthing){
    console.log(this.a, somthing);
}

function bind(fn, obj){
  return function(){
    return fn.apply(obj, arguments);
  }
}

var obj = {
    a:2
}

var bar = bind(foo, obj);
var b = bar(3);
console.log(b);
*/

console.log('※----------------------------------');
var a = [];
a[0] = 1;
a['foobar'] = 2;
console.log(a);
console.log(a.length);
console.log(a.foobar);


console.log('※----------------------------------');
var callback = function(a,b){
    console.log(a + b);  // 'foobar'
}

var aa = function () { 
  setTimeout(function(){
    callback('foo', 'bar');
  }, 1000)
}

var bb = function() {
  setTimeout(callback, 1000, 'foo', 'bar123');
}
aa();
bb();


console.log('※----------------------------------');
//var a=1,b=2,c;c=a;a=b;b=c
var a=1,b=2;a=[b,b=a][0]
console.log('a:'+a+',b:'+b)


console.log('※----------------------------------');
/*function curry(fn){
    var args = Array.prototype.slice.call(arguments,1);
    
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);        
        var final = args.concat(innerArgs);
    }
}
function addd(num1,num2){
    return num1+num2;
}
var Cadd = curry(addd,5);
console.log(Cadd(3)); //8
console.log(Cadd(5)); //10
*/



var a = '台北-TPE';
var b = a.split('-')[1];

console.log(b);
