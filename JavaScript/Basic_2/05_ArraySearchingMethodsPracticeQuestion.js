// indexOf()

// Write a JavaScript statement to find the index of the first occurrence of the element "banana" in the array fruits.
let fruits = ["banana", "govava", "cherry"]
console.log(fruits.indexOf("banana"))//i am getting its first occurrence which is zero 


// How do you use the indexOf() method to find the index of a specific element in an array?
console.log(fruits.indexOf("govava"))

// What is the output of the following code: let fruits = ["apple", "banana", "orange"]; let index = fruits.indexOf("banana", 2); console.log(index);
let fruits1 = ["apple", "banana", "orange", "apple"];
let index = fruits1.indexOf("apple", 3);
console.log(index); //i am getting output as three

//lastIndexOf()

//Write a JavaScript statement to find the index of the last occurrence of the element "apple" in the array fruits.

console.log(fruits1.lastIndexOf("apple"))//output is three

//How do you use the lastIndexOf() method to find the index of a specific element in an array?

console.log(fruits1.lastIndexOf("banana"))//output is 1

//What is the output of the following code: let fruits = ["apple", "banana", "orange", "apple"]; let index = fruits.lastIndexOf("apple", 3); console.log(index);

let fruits3 = ["apple", "banana", "orange", "apple"]
let index3 = fruits.lastIndexOf("apple", 3);
console.log(index);

// includes()

// Write a JavaScript statement to check if the array fruits contains the element "banana".

let check = fruits3.includes("banana")
console.log(check)

// How do you use the includes() method to check if an array contains a specific element?

let check2 = fruits3.includes("banana")
console.log(check2)


//What is the output of the following code: let fruits = ["apple", "banana", "orange"]; let containsApple = fruits.includes("apple", 1); console.log(containsApple);

//ans :- Because it is in zeroth index so the answer is false.