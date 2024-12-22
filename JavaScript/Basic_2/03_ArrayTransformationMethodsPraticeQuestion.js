// Topic = reduce method 

// question 1 :- Write a JavaScript statement to calculate the sum of all numbers in an array called numbers using the reduce() method.

const numbers = new Array(12, 34, 54, 567)
const addNumber = numbers.reduce((num, num2) => num + num2)
console.log(addNumber)

//question 2 :- What is the output of the following code: ["a", "b", "c"].reduce((acc, current) => acc + current);

const character = new Array('a', 'b', 'c').reduce((acc, curent) => acc + curent)
console.log(character)//all will concatinate

//question 3 :- How do you use the reduce() method to concatenate all elements of an array into a single string?let array = ["hello", "world", "javascript"];
let array = ["hello", "world", "javascript"];
let concatenatedString = array.reduce((acc, current) => acc + " " + current, "");
console.log(concatenatedString);

//reduceRight method
//question number 1 :- What is the output of the following code: ["a", "b", "c"].reduceRight((acc, current) => acc + current);
let characterset = ['a', 'b', 'c', 'd'].reduce((char, char2) => char + " " + char2)
console.log(characterset)

//question number 2 ;- How do you use the reduceRight() method to reverse the order of elements in an array?
let characterset2 = ['a', 'b', 'c', 'd'].reduce((char, char2) => char2 + " " + char)
console.log(characterset2)

//question number 3 :- Write a JavaScript statement to calculate the product of all numbers in an array called numbers using the reduceRight() method.

let dotProduct = new Array(23, 43, 546, 32, 34).reduceRight((acc, current) => acc * current)
console.log(dotProduct)

//some method questions
//question numer 1 :- Write a JavaScript statement to check if at least one element in an array called numbers is greater than 10 using the some() method.

let numberlist = new Array(1, 2, 4, 5, 3, 2, 5, 2, 10.4, 34, 21, 34).some((num) => num > 10)
console.log(numberlist)

//question number 2:- How do you use the some() method to check if all elements in an array satisfy a given condition?

const number_list2 = new Array(12, 432, 24, 113, 3).some((num) => num >= 23)
console.log(number_list2)

//question number 3 :- What is the output of the following code: ["a", "b", "c"].some((element) => element.length > 1);

let input = ["a", "b", "c", "d", "e"].some((element) => element.length >= 1);
console.log(input)

//every method question 
// question 1 :- Write a JavaScript statement to check if all elements in an array called numbers are greater than 0 using the every() method.

let everyvariable = [12, 432, 24, 113, 3].every((num) => num > 1)
console.log(everyvariable)

//question 2 :- How do you use the every() method to check if no elements in an array satisfy a given condition?

let everyvariable2 = [12, 432, 24, 113, 3].every((num) => num < 1)
console.log(everyvariable2)

//question 3 :- What is the output of the following code: ["a", "b", "c"].every((element) => element.length > 1);

let everyvariable3 = ["a", "b", "c", "d", "e"].every((num) => num > 1)
console.log(everyvariable3)

