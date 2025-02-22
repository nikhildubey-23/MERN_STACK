// Rules for to chosse the varibale in the js
// letter digit and underscrore are allowed 
// must begin with $ , letter and underscore
// case sensitive
//reserved words are not allowed to be choosen as variable
// var, let, const are used to declare the variable

// Another most important thing is Var vs Let in js 
// Var is function scoped and let is block scoped
// Var can be redeclared and let can't be redeclared
// Var can be updated and let can be updated
// Var can be hoisted and let can't be hoisted
// Var is global scoped and let is not global scoped

// 7 primitive data types in js
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// 3 reference data types in js
// 1. Array
// 2. Object
// 3. Function

// 2 types of data types in js
// 1. Primitive data types
// 2. Reference data types

// let's see the example of object 
const info = {
    name: 'Shivam',
    age: 22,
    phonenumber: 1234567890,
    marks:34,
}
//this is how we can access the object value 
console.log(info.name);
console.log(info.age);
console.log(info.phonenumber);
console.log(info.marks);


// =======================================================
// practice question
//question number 1  :- create a variable of type script and try to add a number to it.

let type = 'script';
type = 10;
console.log(type); //i found that type variable is updated with the number 10

//question number 2 :- use typeof operator to find the datatype if the string in last question 

console.log(typeof type); // i found that the type is number

//question number 3 :- create a const object in js can you change it to hold a number later 

const obj = {
    name: 'shivam',
    age: 22,
    phonenumber: 1234567890,
    marks:34,
}
obj.age = 23;
console.log(obj.age); // i found that the age is updated to 23

//question number 4 :- try to add a new key to the const object in problem 3 were you able to do it?

obj.address = 'delhi';
console.log(obj); // i found that the address is added to the object

//write a js program to create a word meaning dictionary of 5 words.

const dictionary = {
    apple: 'Seb',
    mango: 'aam',
    orange: 'santra',
    banana: 'kela',
    guava: 'amrud',
}
console.log(dictionary.apple);
console.log(dictionary.mango);  
