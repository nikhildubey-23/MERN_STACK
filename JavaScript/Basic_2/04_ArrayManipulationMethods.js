// push()
// pop()
// shift()
// unshift()
//concat()
// splice()
// slice()

//push method adds one more elements to the end of an array 
let pushelement = new Array(12, 2, 34, 21, 34, 21, 34, 3)
console.log(pushelement)
pushelement.push(3, 121)
console.log(pushelement)

//pop method removes the last element form an array
let popelementlist = [12, 43, 2, 4, 2, 4, 1, 34, 1278]
console.log(`before we pop ${popelementlist}`)
popelementlist.pop()
console.log(`after we pop ${popelementlist}`)

//shift :- the shift method removes the first element form an array
let shiftvalue = popelementlist.shift()
console.log(shiftvalue)
console.log(`after we perfromed the shift operation ${popelementlist}`)

//unshift :- the unshift method use to adds one or more elements to the beginning of an array
let unshiftValue = new Array(23, 21, 34, 12, 34, 21, 34)
console.log(`before we unshift the value ${unshiftValue}`)
let afterunshift = unshiftValue.unshift(12, 445)//we can add some more elements also
console.log(`after we performed unshift ${unshiftValue}`)

//concat method :- this method is use to merge two or more array
let arr1 = [12, 34, 23, 234, 34, 4]
let arr2 = [23, 43, 23, 43, 2, 3, 43]
let resultarray = arr1.concat(arr2)
console.log(resultarray)

//splice method :- this method is use to change the content of an array by removing or replacing existing elements.
arr2.splice(2, 3, "nikhil", "dubey")
console.log(arr2)

//slice method :- this method is use to return a new array containing a portion of the new original array
console.log(arr2.slice(1, 4), "this is your new array")




