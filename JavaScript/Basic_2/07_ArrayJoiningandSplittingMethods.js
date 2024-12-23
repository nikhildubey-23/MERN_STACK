// join()
// split()

// join()

//The join() method concatenates all the elements of an array into a single string.

// The join() method returns the concatenated string.

// The join() method does not modify the original array.

// The join() method can take an optional separator string as an argument. If no separator is provided, the elements are joined with no separator.


const array = [1,2,4,6,63,234]
const string = array.join()
console.log(`the class of array is now ${typeof(array)} and its output is ${string}`)

// split()
// The split() method splits a string into an array of substrings.

// // The split() method returns the array of substrings.

// // The split() method does not modify the original string.

// // // // The split() method can take an optional separator string as an argument. If no separator is provided, the entire string is returned as a single element in the array.

const str = "hello world"
const arr = str.split(" ")
console.log(arr)
console.log(typeof(arr))
