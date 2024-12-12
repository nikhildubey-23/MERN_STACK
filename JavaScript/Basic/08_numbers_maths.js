const num1 = 12000;
// method one to declare a number or a string
const num2 = new Number(num1);

//priting both the value
console.log(num1);
console.log(num2);

//suppose we want to change this number into string data type
console.log(num1.toString()); //after applying this we have a number but its data type is string

console.log(num1.toString().length); //as we know that now it is converted into string now it also hold the method of string too.

//some time we need a fixed value mainly when we make any banking or e-commerce website
let unfixedNumber = 120000
console.log(unfixedNumber.toFixed(3))//output is like this 120000.000 //means we get the decimal value also.

//to precision property
let otherNumber1 = 1200.895
console.log(otherNumber1.toPrecision(3))
let otherNumber2 = 120.89
console.log(otherNumber2.toPrecision(3))
let otherNumber3 = 12.895
console.log(otherNumber3.toPrecision(3))
let otherNumber4 = 1200.89
console.log(otherNumber4.toPrecision(3))
//yes it is true it quite confusing but if we see carefully then we found that we set the value of precision value for 3 after 3 precision value it will use the exponential part to define the result

const hundred = 100000000 //sometime this many zeros are difficult to count so for this we have one method 
console.log(hundred.toLocaleString("en-IN")); //if we not put the "en-IN" then we get the US standard output after putting this i got the indian standard value

//**************************maths*************************************** */

console.log(Math) //basically after applying this i get the output meths with object

console.log(Math.abs(-455)) //it use to tell the absolute value means it will change the negative sign to positive but not reverse


// now suppose i want to round any number
const number = new Number(4.87)
console.log(Math.round(number))
// i can also select the floor and ceil value also
console.log(Math.floor(number))
console.log(Math.ceil(number))
// now suppose i want to find the min and max value using maths it is also possible

console.log(Math.min(12,234,45,356,45,123))
console.log(Math.max(12,234,45,356,45,123))

//random value concept
console.log(Math.random())//basically it is use to provide value in between 1 and 0 only 

//suppose i need value form 1 to 10 for that i have to do
console.log(Math.random()*10+1)//when i apply this i found that it will also give me the long value after decimal to avoid this we can use the maths.floor method to get the floor value 
console.log(Math.floor(Math.random()*10)+1)

// so from here we made one formula 
const min = 10
const max = 20 

const finaloutput = Math.floor(Math.random()*(max-min+1)+min) //learn it well
console.log(finaloutput);






