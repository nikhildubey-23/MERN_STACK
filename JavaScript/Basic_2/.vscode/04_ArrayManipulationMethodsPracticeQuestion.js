//question regarding push operation 
//Write a JavaScript statement to add the element "orange" to the end of the array fruits.
const color = ["Blue", "Green", "gray", "Brown"]
console.log(`before we add the orange ${color} \n`)
const orangeAdd = color.push("Orange")
console.log(`After we add the orange ${color} \n`)

//How do you use the push() method to add multiple elements to an array?
const color2 = ["Blue", "Green", "Yellow", "Brown"]
console.log(`before we add the orange ${color2} \n`)
const orangeAdd2 = color2.push("Orange", "White", "Pink")
console.log(`After we add the orange ${color2} \n`)

//What is the output of the following code: let fruits = ["apple", "banana"]; fruits.push("cherry"); console.log(fruits);
//soln Apple Banana Cherry is the output of this code 

//Question regarding pop method
//Write a JavaScript statement to remove the last element from the array numbers.
let numberArray = new Array(1, 2, 3, 4, 5, 5, 6)
numberArray.pop()
console.log(numberArray)

//How do you use the pop() method to remove the last element from an array and store it in a variable?
let numberArray2 = new Array(1, 2, 3, 4, 5, 5, 6)
console.log(`before we performed the pop operation`)
let removed = numberArray2.pop()
console.log(`removed element is ${removed} and after removing ${removed} the array is ${numberArray2}`)

//What is the output of the following code: let numbers = [1, 2, 3, 4, 5]; let lastNumber = numbers.pop(); console.log(lastNumber);
//output is 5

//Question regarding the shift property 
//Write a JavaScript statement to remove the first element from the array colors.
color.shift()
console.log(color)//Blue color is removed 

//How do you use the shift() method to remove the first element from an array and store it in a variable?
let removedColor = color.shift()
console.log(removedColor)//output is Green 

//What is the output of the following code: let colors = ["red", "green", "blue"]; let firstColor = colors.shift(); console.log(firstColor);
//it is use to remove the first color which is red 

//question related to unshift method 
// Write a JavaScript statement to add the element "yellow" to the beginning of the array colors.

console.log(color)
color.unshift("yellow")
console.log(color)//successfully yellow color is added 

//How do you use the unshift() method to add multiple elements to the beginning of an array?
color.unshift("skincolor", "lightgreen", "purple")
console.log(color)

//What is the output of the following code: let colors = ["red", "green", "blue"]; colors.unshift("yellow"); console.log(colors);
// solution is yellow color will going to removed 

//concat
//Write a JavaScript statement to concatenate the arrays numbers1 and numbers2.
let arrNumber1 = [1, 2, 34, 4, 5, 32, 434, 2]
let arrNumber2 = [12, 2334233, 2312, 235123, 254123]
let concatedArray = arrNumber1.concat(arrNumber2)
console.log(concatedArray)

//How do you use the concat() method to concatenate multiple arrays?
let arrNumber3 = [1, 2, 34, 4, 5, 32, 434, 2]
let arrNumber4 = [3, 6, 3, 2, 6, 2]
let arrNumber5 = [1, 2, 34, 4, 5, 32, 434, 2]
let arrNumber6 = [12, 5, 23, 65, 23, 667, 8]
let finalconcat = arrNumber3.concat(arrNumber4, arrNumber5, arrNumber6)
console.log(finalconcat)

//What is the output of the following code: let numbers1 = [1, 2, 3]; let numbers2 = [4, 5, 6]; let numbers = numbers1.concat(numbers2); console.log(numbers);
//both the array merge together 

//splice
//Write a JavaScript statement to remove the element at index 2 from the array fruits.

let fruits = ['apple', 'banana', 'orange']
let splicefruite = fruits.splice(2)
console.log(fruits)

//How do you use the splice() method to add an element to an array at a specific index?

let addsplice = fruits.splice(2, 3, "Govava", "cherry", "orange")
console.log(fruits)

//What is the output of the following code: let fruits = ["apple", "banana", "cherry", "date"]; fruits.splice(2, 1); console.log(fruits);

//second index value cherry replaced by one.


//Slice()
//Write a JavaScript statement to extract the elements from index 1 to index 3 from the array numbers.

let listnumber = [1, 2, 4, 5, 6, 7, 8, 8, 4, 32, 2]
let slicedpart = listnumber.slice(1, 4)
console.log(slicedpart)

//How do you use the slice() method to extract a subset of elements from an array?
//same as we did above

//What is the output of the following code: let numbers = [1, 2, 3, 4, 5]; let subset = numbers.slice(1, 3); console.log(subset);

//2 and 3 are going to print


