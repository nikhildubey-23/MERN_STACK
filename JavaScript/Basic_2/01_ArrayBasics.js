// Create an array and log it to the console
// Accessing array elements by index
// Updating array elements
// Array length and indexing

// Create an array and log it to the console
const array1 = [1,2,4,5,6,7];
console.log(`this is the simplest method to declare array ${array1}`);
const array2 = new Array(1,2,4,5,6,7);
console.log(`this is the object method to declare an array ${array2}`);

//we can also declare the empty array for futher use
const array3 = [];

// Accessing array elements by index
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);

// Updating array elements
array1[0] = 100;
array1[1] = 200;
array1[2] = 300;
array1[3] = 400;
array1[4] = 500;
array1[5] = 600;

// Array length and indexing
console.log(array1.length);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
