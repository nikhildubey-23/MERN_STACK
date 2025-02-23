//as other programming language js is also having operator such as Arithmetic operator, Assignment operator, Comparison Operator, Logical Operator
//Arithmetic operator :- +, -, *, /, %, ++, --
//Assignment Operator :- =, +=, -=, *=, /=, %=, **=
//Comparison Operator :- ==, !=, ===, !==, >,<,>=,<=,?
//Logical Operator :- && , ||, !

//There are two type of comment in js , singe line comment and multi line comment in js
// single line comment :- //
//multi line comment:-
/* i am a 
multi 
line 
comment */

// there are conditional statements also 
//if    statement
//if....else statement
//if....else if....else statement

//if statement syntax 
// if (condition) {
//     //execute this code
// }

//if....else statement
// if (condition) {
//     //block of code when condition is true
// } else {
//     //block of code if condition false
// }

//if....else if....else statement
// if (condition) {
//     //block of code when condition is true
// }
// else if (condition) {
//     //block of code when condition is true
// }
// else if (condition) {
//     //block of code when condition is true
// }
// else{
//     //block of code if condition false
// }

// javascript ternary operator
// marks = 12
// result = (marks>10) ? 'yes':'no'
// console.log(result)

// ==========================================================
// question number 1 :- use logical operator to find whether the age of a person lies between 10 and 20

age = 22
if (age>=10 && age <= 20){
    console.log('yes age is lies in between 10 to 20')
}else{
    console.log('age is not lies in between 10 and 20')
}

//question number 2 :- Demonstrate the use of switch case statements in Js
let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}
console.log(`Today is ${day}`)
// ==========================================================
//

// write a js program to find that whether the number a number is divisible by 2 or 3 

let number = 213
if (number % 2 == 0 && number % 3 == 0) {
    console.log('number is divisible by 2 and 3')
    
}else if (number % 2 == 0) {
    console.log('number is divisible by 2')
    
}else if (number % 3 == 0) {
    console.log('number is divisible by 3')
    
}else{
    console.log('number is not divisible by 2 and 3')
}

// print 'you can drive ' or 'you cannot drive' based on age being grater than 18 using ternary operator

let age1 = 22
let result = (age1>18) ? 'you can drive':'you cannot drive'
console.log(result)

