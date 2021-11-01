// Import stylesheets
import './style.css';

// Write Javascript code!

console.clear();
// function add(a, b) {
//   return a + b;
// }

// function manipulate(a, b, func) {
//   let c = a + b;
//   let d = a - b;
//   function multiply() {
//     var m = func(a, b);
//     return c * d * m;
//   }
//   return multiply;
// }
// const multiply = manipulate(3, 4, add);
// console.log(multiply());

// function add(a,b){
//   return a+b
// }
// function manipulate(a, b,func){
//   let c= a+b
//   let d= a-b
//   return function(){
//     let m = func(a,b)
//     return c*d*m
//   }
//   return multiply
// }
// let multiply = manipulate(3,4,add)
// console.log(multiply())

// function add(a, b) {
//   return a + b;
// }
// function manipulate(a, b, func) {
//   let c = a + b;
//   let d = a - b;
//   return function () {
//     let m = func(a, b);
//     return c * d * m;
//   };
// }

// let multiply = manipulate(3, 4, add);
// console.log(multiply());

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;
// function forEach() {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
// }
// forEach();
// console.log(sum);

// let c = 5;
// function a() {
//   let x = 5;
//   return function () {
//     console.log(x);
//   };
// }
// lett b = a();
// console.dir(b);

// let sum = 0;
// arr.forEach(function (value, index, arr) {
//   sum += value;
// });
// console.log(sum);

// function forEach(arr,cb){
//   for(let i= 0;i<arr.length;i++){
//     cb(arr[i],i,arr)
//   }
// }

// forEach(arr,function(value,index,arr){
//   console.log(value,index,arr)
// })

// arr.filter(function(value,index,number){
//   console.log(value)
// })

// let filterArr=arr.filter(function(value){
//   return value%2 === 0
// })

// console.log(filterArr)

// function filterArr(arr, cb) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(
//   filterArr(arr, function (value) {
//     return value % 2 === 1;
//   })
// );

// let result = arr.reduce(function (prev, curr) {
//   return prev + curr;
// }, 0);
// console.log(result);

// let result2 = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// }, 0);
// console.log(result2);

// function myReduce(arr, cb, init) {
//   for (let i = 0; i < arr.length; i++) {
//     init = cb(arr[i], init);
//   }
//   return init;
// }

// let result3 = myReduce(
//   arr,
//   function (prev, next) {
//     return prev + next;
//   },
//   0
// );
// console.log(result3);

// let myFind = arr.find(function(value){
//   return value === 9
// })

// console.log(myFind)

// let myFindIndex= arr.findIndex(function(value){
//   return value === 6
// })

// console.log(myFindIndex)

// function myFind(arr,cb){
//   for(let i=0;i<arr.length;i++){
//     if(cb(arr[i])){
//       // return arr[i]
//       return i
//     }
//   }
// }

// let result = myFind(arr, function(value){
//   return value === 2
// })

// console.log(result)

// let myFind = arr.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(myFind);

// arr.sort();
// console.log(arr);

// persons.sort(function(a,b){
//   if(a.age>b.age){
//     return 1
//   } else if(a.age<b.age){
//     return -1
//   }else {
//     return 0
//   }
// });
// console.log(persons);

// let result = arr.every(function (value) {
//   return value >= 5;
// });

// console.log(result);

// let result2 = arr.some(function (value) {
//   return value >= 6;
// });
// console.log(result2);

// function greet(msg) {
//   function greetings(name) {
//     return msg + ', ' + name + '!';
//   }
//   return greetings;
// }
// let result = greet('Good Morning');
// console.log(result('forhad'));

// function sayHi(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log('Hi, I am Calling');
//   sayHi(n - 1);
// }
// sayHi(10);

// function recurSive(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * recurSive(n - 1);
// }

// console.log(recurSive(4));

// function sumOfArray(arr, lastIndex) {
//   if (lastIndex < 0) {
//     return 0;
//   }
//   return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
// }

// console.log(sumOfArray(arr, arr.length - 1));

// function sayHi(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log('Hi I am calling');
//   sayHi(n - 1);
// }

// sayHi(10);

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }

// console.log(sum(10));

// function newArr(arr, lastIndex) {
//   if (lastIndex < 0) {
//     return 0;
//   }
//   return arr[lastIndex] + newArr(arr, lastIndex - 1);
// }

// console.log(newArr(arr, arr.length - 1));

// function curring(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(curring(10)(15)(20));

// function currying(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(currying(10)(10)(10))

function greet(msg) {
  function greetings(name) {
    return msg + ' ' + name + '!';
  }
  return greetings;
}

let result = greet('Good Morning');
console.log(result('Forhad'));

// function base(b){
//   return function(n){
//     let result = 1
//     for(let i = 0; i < b;i++){
//       result *= n
//     }
//     return result
//   }
// }

// let base2 = base(10)
// console.log(base2(5))

// function first(inp) {
//   console.log(inp);
// }
// function second(multiply) {
//   return multiply * 3;
// }
// function third(a, b) {
//   return a + b;
// }

// first(second(third(3, 5)));

// function a() {
//   b();
//   console.log('I am Function A');
// }

// function b() {
//   d();
//   console.log('I am Function B');
// }

// function c() {
//   console.log('I am Function C');
// }
// function d() {
//   c();
//   console.log('I am Function D');
// }

// let x;
// x = 10;
// a();
// console.log('I am global');

// function sam(x, y) {
//   console.log(x + ' + ' + y + ' = ' + (x + y));
// }

// sam(5, 6);

// let a = 89;
// function A() {
//   let b = 12;
//   function B() {
//     let c = 23;
//     console.log(c);
//   }
//   function C() {
//     let d = 56;
//     console.log(d);
//   }
//   console.log(b);
//   D();
//   B();
//   C();
// }
// function D(n) {
//   return n + a;
// }
// A();
// console.log(D(5))

// for (let i = 0; i <= 59; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

// for (let i = 0; i <= 5; i++) {
//   (function (n) {
//     setTimeout(function () {
//       console.log(n);
//     }, 1000 * n);
//   })(i);
// }

// let rect = {
//   width: 10,
//   height: 20,
//   calculateArea: function () {
//     return this.width * this.height;
//   },
//   calculateRange: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// let area = rect.calculateArea();
// console.log(area);
// let range = rect.calculateRange();
// console.log(range);

// function sum(arr1) {
//   for (let i = 0; i < arr1.length; i++) {
//     // console.log(arr1[i])
//     if (arr1[i] < i + 1) {
//       console.log('false');
//     }else if (arr1[i] === i) {
//       console.log('same number increase your number');
//     }
//   }
// }

// sum([1, 2, 3, 4, 5, 6,7]);

// let rect = {
//   width: 100,
//   height: 50,
//   draw: function () {
//     console.log('I am a rectengle');
//     this.printPro();
//     console.log(this)
//   },
//   printPro: function () {
//     console.log('My width is ' + this.width);
//     console.log('My height is ' + this.height);
//   },
// };

// rect.draw();

// function myFunc() {
//   console.log(this);
//   rect.printPro()
// }
// new myFunc();

// let rect = function (width, height){
//   return {
//     width : width,
//     height : height,

//     draw : function() {
//       console.log("My width is " + this.width)
//       console.log("My height is " + this.height)
//       this.print()
//     },
//     print : function () {
//       console.log("My height is a " + this.height)
//       console.log("My width is a " + this.width)
//     }
//   }
// }
// let rect2 = rect(5,2)
// rect2.draw()

// let Fact = function (width, height) {
//   this.width = width;
//   this.height = height;

//   this.draw = function () {
//     this.print();
//   };
//   this.print = function () {
//     console.log('My height is a ' + this.height);
//     console.log('My width is a ' + this.width);
//   };
// };

// let fact1 = new Fact(5, 7);
// fact1.draw();

let arr = [1, 2, 3, 67, 4, 5, 62];

// function myMap(arr, cb) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(cb(arr[i] * 2));
//   }
//   return newArr;
// }

// let myMaps = myMap(arr, function (value) {
//   console.log(value);
// });
// let sum = 0;
// arr.forEach(function (value, index, array) {
//   sum += value;
//   console.log(value, index, array);
// });

// console.log(sum);

// arr.filter(function (value, index) {
//   if (value % 2 === 1) {
//     console.log(value);
//   }
// });

// var names = [11, 22, 33, 11, 33, 22, 12];
// var uniq = names.reduce(function (a, b) {
//   if (a.indexOf(b) < 0) a.push(b);
//   return a;
// }, []);
// console.log(uniq);

// constructor pattern

// let Forhad = function (width, height) {
//   this.width = width;
//   this.height = height;
//   this.draw = function () {
//     console.log('I am Forhad Sikder');
//     this.print();
//     console.log(this);
//   };
//   this.print = function () {
//     console.log('My width is ' + this.width);
//     console.log('My height is ' + this.height);
//   };
// };

// let res = new Forhad(10, 8);
// res.draw();

// function myNew(constructor) {
//   let obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype);
//   let argArray = Array.prototype.slice.apply(arguments);
//   constructor.apply(obj, argArray.slice(1));
//   return obj;
// }

// let rect4 = myNew(Forhad, 45, 25);
// rect4.draw();

// let str = new String('str')

// console.log(str + 'my string is')

// function test() {
//   console.log('something');
// }
// console.log(test.name, test.length);

// let Rect = new Function(
//   'width',
//   'height',
//   `this.width = width;
//   this.height = height;
//   this.draw = function () {
//     console.log('I am Forhad Sikder');
//     this.print();
//     console.log(this);
//   };
//   this.print = function () {
//     console.log('My width is ' + this.width);
//     console.log('My height is ' + this.height);
//   }`
// );
// let rect5 = new Rect(4, 5);
// console.log(rect5);

// Call, apply, bind
// function myFunc(c, d){
//   console.log(this.a + this.b + c + d)
// }
// myFunc.call({a : 40, b: 25}, 8, 9)

// myFunc.apply({a : 400, b: 225}, [5,2])

// let myBind = myFunc.bind({a: 10, b: 10})
// myBind(7,8)

// let n = 10;
// function myNum(n) {
//   n = n + 100;
//   console.log(n);
// }

// myNum(n);
// console.log(n);

// let obj = {
//   a: 9,
//   b: 10,
// };

// function myObj(obj) {
//   obj.a = obj.a + 100;
//   obj.b = obj.b + 110;
//   console.log(obj);
// }
// myObj(obj);
// console.log(obj);

// let Forhad = function (width, height) {
//   let position = {
//     x: 52,
//     y: 25,
//   };

//   this.width = width;
//   this.height = height;

//   let print = function () {
//     console.log('My width is ' + this.width);
//     console.log('My height is ' + this.height);
//   }.bind(this);

//   this.getPosition = function () {
//     return position;
//   };

//   this.draw = function () {
//     console.log('I am Forhad Sikder');
//     print();
//     console.log('position : X = ' + position.x + ', Y = ' + position.y);
//   };
//   Object.defineProperty(this, 'position', {
//     get: function () {
//       return position;
//     },
//     set: function (value) {
//       position = value;
//     },
//   });
// };

// let res = new Forhad(10, 8);
// res.draw();
// console.log(res.getPosition());

// res.position = {
//   a: 7,
//   b: 5,
// };

// console.log(res.position);

// function nam(myArr) {
//   let anoArr = [];
//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 2 === 1) {
//       anoArr.push(myArr[i]);
//     }
//   }
//   return anoArr;
// }

// console.log(nam(myArr));

// function myLove(myArr){
//   myArr.redu
// }
// let myPet = myArr.reduce(function (a, b) {
//   if (a.indexOf(b) < 0) a.push(b);
//   return a;
// }, []);

// console.log(myPet);

// var names = [11, 22, 33, 11, 33, 22, 12];
// var uniq = names.reduce(function (a, b) {
//   if (a.indexOf(b) < 0) a.push(b);
//   return a;
// }, []);
// console.log(uniq);

// let Reactangle = function (width, height) {
//   let position = {
//     a: 50,
//     b: 25,
//   };
//   this.width = width;
//   this.height = height;

//   this.getPosition = function () {
//     return position;
//   };

//   let print = function () {
//     console.log('My width is = ' + this.width);
//     console.log('My height is = ' + this.height);
//   }.bind(this);

//   this.draw = function () {
//     console.log('I am a draw');
//     print();
//     console.log('Position is a = ' + position.a + ' b = ' + position.b);
//   };
//   Object.defineProperty(this, 'position', {
//     get: function () {
//       return position;
//     },
//     set: function (value) {
//       position = value;
//     },
//   });
// };

// let rect = new Reactangle(10, 5);
// rect.draw();

// console.log(rect.getPosition());
// rect.position = {
//   a: 450,
//   b: 550,
// };

// console.log(rect.position);

// function myArray(myArr) {
//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] < myArr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(myArray(myArr));
// let myArr = [1, 2, 3, 4, 3, 5];
// let mySort = myArr.sort(function (a, b) {
//   if (a < b && a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(mySort);

// let res2 = myArr.every(function (value) {
//   return value % 2 === 0;
// });

// console.log(res2);

// let d = new Date()
// let n = d.getFullYear()
// let m = n.toString()

// console.log(m)

// function Person(name){
//   this.name = name
// }
// let p = new Person('forhad')
// console.log(p)

let person = {
  name: 'forhad',
};
// console.log(person);
// console.log(person.toString())

// for (let i in person) {
//   console.log(i);
// }

// console.log(Object.keys(person));
// let descripter = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descripter)

// let baseObj = Object.getPrototypeOf(person);
// let descripter = Object.getOwnPropertyDescriptor(baseObj, 'toString');
// console.log(descripter);

// Object.defineProperty(person, 'name', {
//   enumerable: false,
//   Writable: false,
//   configurable: false,
//   value: 'mr forhad',
// });

// console.log(person);

// for (let i in person) {
//   console.log(i);
// }

// person.name = 'forhad sikder';
// console.log(person);

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

let canWalk = {
  walk: function () {
    console.log('Walking ...');
  },
};

let canEat = {
  eat: function () {
    console.log('Eating ...');
  },
};

function Person(name) {
  this.name = name;
}
mixin(Person.prototype, canWalk, canEat);

let persons = new Person('Md Forhad');

console.log(persons);

let name = 'MD Forhad';

console.log(`Hi, I am ${name} sikder`);
