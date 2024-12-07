//primitive 
// 7type: string , number , null , undefined , symbol,BigInt

// reference type or non-primitive
// arrays , objects, functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //the reson why we are getting false over here is because the symbol are different but values are same 

const bigNumber = 33333333333333n
//when we put n after the value it convert it into bigint

//array , object , function
const heros = ["shaktiman","naagraj","dpga"]

let myobj = {
    name:"nikhil",
    age :20,
}

const myfunction = function(){
    console.log("hello everyone")
}