//singleton "made using constructor"
//like :-Object.create()
    
//object literals 

//how we can declare symbol
const mySym = Symbol("key1")


const user = {
    name : "Nikhil",
    "full name":"Nikhil Dubey",
    email : "nikhil@gmail.com",
    age : 18,
    //this is how we can use the symbol
    [mySym]:"my_key1",
    location:"raipur",
    isLoggedIn : false,
    lastLogin : ['monday',"tuesday","wednesday"]
}

//how to access the objects 

// method number one to access the object
console.log(user.name)

//mostly use method is 
console.log(user["name"]) //we gave the name inside the dual quote because object treate there key by default as a string 

console.log(user["full name"])//thats why also we use the square brackets 

//and we you want to access the symbol which is present inside the object 
console.log(user[mySym])

//suppose i want to add any function inside our object
user.greeting = function(){
    console.log(`hello ${this["full name"]}`)
}

console.log(user.greeting())
//how we can change the value of a key 
user.age = 20
console.log(user)
//now suppose i want to lock my object so that no one can change that's how i can do
Object.freeze(user)
// user.age = 31
// console.log(user)
//now this will not work





