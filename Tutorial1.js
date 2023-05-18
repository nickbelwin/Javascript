console.log("Hey I'm Sarvesh");

// chrome developer tools

//browser developer tools

// variable

// for storing the data
// whole the world all the website, software everything is nothing without the
//data

// text , number  , array , true/false

// java  => diff , diff data tyep for variable

// it is dynamic type conversion language
//it is not static typed language => Java

//In Javascript we have three keyword which is used for defining or
// creating a variable => var, let, const

//var => from initial before 17 june 2015

//let and const came on ecmascript =>6 => es6

//var 
// in javascript anything inside the single quoted , double quoted and  ``(back-tick)
var firstName="Sarvesh";
var lastName='Belwalkar';
var middleNmae=`Balkrishna`;
console.log(firstName, middleNmae, lastName);

// typeof keyword will tell you what is the data type
console.log(typeof firstName, typeof middleNmae, typeof lastName);

var a="Sarvesh";
console.log("Line No: 38", typeof a);
a=1234;
console.log("Line No: 40", typeof a);
var a=234; // this will not give any error re-declaration allowed for variable
console.log()

console.log(window, a);

b=30;

// types are there in js main

//number
//string
//boolean
//BigInt
//Object
//Symbol
//undefined

//

// Infinity
// -Infinity

// Interview Important Question
console.log("positive=>", typeof Infinity); //type number
console.log("negative=>", typeof -Infinity);//type number

//boolean

var check = true;
// typeof always return the string value
console.log(typeof check); //boolean
const checker= typeof check; // 'boolean'
console.log(typeof checker); // what type exactly typeof