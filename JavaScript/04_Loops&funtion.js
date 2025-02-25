//Type of loops in js
// for loop - loop a block of code a number of times
//for in loop - loop through the properties of an object
//for of loop - loop through the values of an iterable object
//while loop - loop through a block of code while a specified condition is true
//do while loop - loop through a block of code once, and then repeats the loop while a specified condition is true

//for loop
// for (statement 1; statement 2; statement 3) {
//     code block to be executed
// }
//statement 1 is executed before the loop starts
//statement 2 defines the condition for running the loop
//statement 3 is executed each time after the loop has been executed
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//output: 0 1 2 3 4

//for in loop
//loop through the properties of an object
const person = {
    name: 'John',
    age: 30
};
for (let key in person) {
    console.log(key, person[key]);
}
//output: name John
//        age 30    

//for of loop
//loop through the values of an iterable object
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
//output: red
//        green     
//        blue

//while loop
//loop through a block of code while a specified condition is true
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//output: 0 1 2 3 4\

//do while loop
//loop through a block of code once, and then repeats the loop while a specified condition is true
let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 5);
//output: 0 1 2 3 4

// function in js 
// function is a block of code that can be reused
// function declaration
// function functionName(parameters) {
//     code block to be executed
// }
function greet() {
    console.log('Jai Hind');
}
greet();
//output: Hello World

//function with parameters
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');
//output: Hello John

//function with return value
function square(number) {
    return number * number;
}
let result = square(5);
console.log(result);
//output: 25

//arrow function
// const functionName = (parameters) => {
//     code block to be executed
// }
// const greet = () => {
//     console.log('Hello World');
// }
// greet();
//output: Hello World

//arrow function with parameters
// const greet = (name) => {
//     console.log('Hello ' + name);
// }
// greet('John');
//output: Hello John

//practice question for this notes 


//Q1. write a for loop that prints the even numbers from 0 to 10

for(let i = 0; i<=10 ; i++){
    if(i%2==0){
        console.log(i);
    }
}

//Q2. given the following object , use a for-in loop print both the keys and values.
const car={
    make:'Toyota',
    model:'Camry',
    year:2020
};
for(let key in car){
    console.log(key,car[key]);
}

//Q3. Given the following array, use a for-of loop to print each element
const fruits = ['Apple','Banana','Cherry'];
for(let fruit of fruits){
    console.log(fruit);
}

//Q4. Write while loop that prints number form 10 to 1

let num = 10;
while(num>=1){
    console.log(num);
    num--;
}

//05. write a do while loop prints the 1 to 5
let num1 = 1;
do{
    console.log(num1)
    num1++;
}while(num1<=5);

//06. write a function named multiply that takes two parameter and returns there product. call the function with the argument 4 and 5 and return the result.
const multiply = (num1,num2) => {
    return num1*num2;
}
let result1 = multiply(4,5);
console.log(result1);

//Q7. convert the following function declaration to an array function:
/*function add(a, b) {
    return a + b;
}*/

const sum = (a,b)=>{
    return a+b;
}
console.log(sum(2,3));

//Q8. write a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise. test the function with the number 4
let num2 = 4
const isEven = (num2) => {
    if(num2%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(num2));

//Q9. write a program to print the marks of the student in an object using for loop
const obj = {
    'raman': 90,
    'shyam': 80,
    'mohan': 70
}
for(let i = 0 ; i<obj.length;i++){
    console.log(obj[i]);
}  // not getting any output because object does not have the length property

//Q10. solve question 9  using for in loop
for(let key in obj){
    console.log(key,obj[key]);
}
//11. write a function to find the mean of 5 number 
// Function to find the mean of 5 numbers
function findMean(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}

// Example usage
const mean = findMean(1, 2, 3, 4, 5);
console.log(mean); // Output: 3