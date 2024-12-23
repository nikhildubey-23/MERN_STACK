// indexOf()
// lastIndexOf()
// includes()

// indexof():- this method is use to find the first index at which a given element appears in an array
let element = [1,2,4,5,2,245]
let elementindex = element.indexOf(5)
console.log(elementindex)

//now suppose we guess that 2 is present in the index two  and we want to check whether it is true or not then also we can use the indexOf method

let foundelement = element.indexOf(2,2)
console.log(foundelement)//it found that two is present in the 4th index 

// lastIndexOf method :- similar to indexOf method , but it returns the index of the last occurrence of the element in the array

let lastindexof = element.lastIndexOf(245)
console.log(lastindexof)//i got the value 5

let element2 = [1,2,4,5,2,245,1]
console.log(element.lastIndexOf(1,4))//i am getting the output 4

let includedvalue = element2.includes(245)
console.log(includedvalue)//the output is true 

//we can also provide the indexing for start search 

let includedvalue2 = element2.includes(245,6)
console.log(includedvalue2)//i am getting false because it is in 5th indexing


