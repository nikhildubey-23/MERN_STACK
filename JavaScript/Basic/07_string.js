const name = "nikhil"
const age = 21
console.log(`my name is ${name} and i am ${age} year's old`) //this is called string interpolation

// another way to declare string
const writeName = String("Nikhil")//becuase we declare like this we are also able to apply various method into it like indexing and other
console.log(writeName)
console.log(writeName[0])//accessing the zeroth index

// otherproperty
console.log(writeName.length)
console.log(writeName.toUpperCase())
// when we want to know the position of any charecter 
console.log(writeName.charAt(4))
//reverse
console.log(writeName.indexOf("i"))
//substring
let gameName = "Free-fire"
console.log(gameName.substring(0,4)) //providing the range //it doesn't Allow negetive value

//slicing
console.log(gameName.slice(-8,4))

// some time when we are taking input from the user user use to provide space in between the name and when we transfer that name into the database we don't want that this space also going to save so, to protect that type of activity we usually use to trim the user input mostly when we are taking name as input

let username = "  Aman Sinha  "
console.log(`without trim,${username}`)
console.log(`after trim,${username.trim()}`)

//replace
let url = "https://www.google.come/"
console.log(`before replace method, ${url}`)
console.log(`after replace method, ${url.replace("google","nikhil")}`)

// suppose i want to know that this string is exist or not then i use the includes function

console.log(url.includes("google"))
//split method
console.log(url.split(".")); 


