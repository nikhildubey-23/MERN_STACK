// reduce()
// reduceRight()
// some()
// every()
// find()
// findIndex()


//reduce method this method applies a function to each element in the array and reduces it to single line value 

const  number = [12,34,45,32,45,23]
const sum = number.reduce((acc,current)=> acc+current,0)
console.log(sum)

//reduceRight method :- it is same as reduce but only single difference is that it use to perfrom operation from right to left

const number2 = [1,2,3,4,5,6]
const sub = number2.reduceRight((acc,current)=> acc - current)
console.log(sub)

//some method : the some method is use to check if at least one element in the array passes the test implemented by the provided  function

const check = [12,43,546,2,1,52]
const filtervalue = check.some((num)=>num%2===0)
console.log(filtervalue)

//every method :- this method is use to check all the element you can say that every is a subling of some method 
const check2 = new Array(23,453,23,523435,45,2345)
const finalValue = check.every((checked)=> checked %2 ===0 )
console.log(finalValue)

//find method :- these method return the first element in the aaray which use to satisfy the providede testing
const findValue = new Array(23,21,134,534,123,5,341224,345)
const valueFound = findValue.find((check3)=>check3 %3 ===0);
console.log(valueFound)


//findIndex Method ;- this method is use to return the index of the first element in the array
const idex = new Array(12,43,45,2131,45);
const found = idex.findIndex((num )=> num /5 ===0 )
console.log(found)


