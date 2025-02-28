// how we can create string
let string = "Hello World";
//function to find the length of the string
let lenstring = string.length;
console.log(lenstring);

// template literals use the backtick instead of quotes
let name = `nikhil`;
//it mainly use when we want to add the double quotes or single quote in between the string and also we can add the variable in between the string

let age = 22;
console.log(`My name is ${name} and my age is ${age}`);

//String Methods
let str = "Hello World";
console.log(str.toUpperCase()); //this will convert the string into uppercase HELLO WORLD

console.log(str.toLowerCase()); //this will convert the string into lowercase hello world

console.log(str.slice(0, 5)); //this will slice the string from 0 to 5 index Hello

console.log(str.replace("Hello", "Hi")); //this will replace the Hello with Hi Hi World

console.log(str.concat(" ", "Nikhil")); //this will concat the string with the given string Hello World Nikhil

let str2 = " hello world "
console.log(str2.trim()); //this will remove the extra space from the string hello world

console.log(str[0]); //this will give the character at the 0 index H //means string are mutable 

//practice question based on the string
//q1 . finds and print the length of the string
let string1 = "Hello World";
console.log(string1.length);//output: 11

//q2 . convert and print the string to upprecase
console.log(string1.toUpperCase());//output: HELLO WORLD

//q3. convert and print the string to lowercase
console.log(string1.toLowerCase());//output: hello world

//q4. slices and print the first 5 characters of the string

console.log(string1.slice(0,5));//output: Hello

//q5. replace the Hello with Hi and print the string and prints the string
console.log(string1.replace("Hello","Hi"));//output: Hi World

//q6. concatenates the string with "javascript" and print the string
console.log(string1.concat(" ","javascript"));//output: Hello World javascript

//q7. trims any extra space in the string and print the string
let string2 = " hello world ";
console.log(string2.trim());//output: hello world

// q8. print the character at the 0 index of the string
console.log(string1[0]);//output: H