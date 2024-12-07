//string to number conversion 
let anyNumber = "33"
let convertIntoNumber = Number(anyNumber)

console.log(convertIntoNumber)
console.log(typeof convertIntoNumber);

let anyNumber2 = "33abc"
let convertIntoNumber2 = Number(anyNumber2)

console.log(convertIntoNumber2)
console.log(typeof convertIntoNumber2);
// i found in the output that NaN is also a number with that we have to carefull

let anyNumber3 = null
let convertIntoNumber3 = Number(anyNumber3)

console.log(convertIntoNumber3)
console.log(typeof convertIntoNumber3);
// i found that when i pass null and did the conversion into number it turns to zero and its data type is number

let anyNumber4 = undefined
let convertIntoNumber4 = Number(anyNumber4)

console.log(convertIntoNumber4)
console.log(typeof convertIntoNumber4);
// i found that when i pass undefined and did the conversion into number it turns to NaN and its data type is number

let anyNumber5 = ""
let convertIntoNumber5 = Number(anyNumber5)

console.log(convertIntoNumber5)
console.log(typeof convertIntoNumber5);
// i found that when i pass empty dule quotes and did the conversion into number it turns to 0 and its data type is number

let anyNumber6 = true
let convertIntoNumber6 = Number(anyNumber6)

console.log(convertIntoNumber6)
console.log(typeof convertIntoNumber6);
// i found that when i pass true  and did the conversion into number it turns to 1 and its data type is number and when i enterd flase it gives me output as zero and still its data type is number.

// Let's convert number to string

let someNumber = 443
let conversionString = String(someNumber)
console.log(conversionString)
console.log(typeof conversionString)
// as normal its convert it into string form

let someNumber2 = true
let conversionString2 = String(someNumber2)
console.log(conversionString2)
console.log(typeof conversionString2)
// in the output i found that true converted into string means it converted into blooen to string same thing happen if we do with false too.

let someNumber3 = undefined
let conversionString3 = String(someNumber3)
console.log(conversionString3)
console.log(typeof conversionString3)

// both of them are converted to strig and nothing happend

let someNumber4 = null
let conversionString4 = String(someNumber4)
console.log(conversionString4)
console.log(typeof conversionString4)


// Boolean conversion 
let number = 1
let conversionToBool = Boolean(number)
console.log(conversionToBool)
console.log(typeof conversionToBool)
// in output i found true as output

let number2 = 2
let conversionToBool2 = Boolean(number2)
console.log(conversionToBool2)
console.log(typeof conversionToBool2)
// in output i found true as output

// and one thing more i found is that if i gave him any number it shows me true 

// let number3 = null
// let conversionToBool3 = Boolean(number3)
// console.log(conversionToBool3)
// console.log(typeof conversionToBool23

// when i put null i found the error in code

let number4 = ""
let conversionToBool4 = Boolean(number4)
console.log(conversionToBool4)
console.log(typeof conversionToBool4)
// when i put empty dual quotes i found the false in output and its type is boolean



