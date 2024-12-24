//two method to declare object 
//singleton object  
const singObject = new Object();
console.log(singObject) //in output we will get the empty object 

//define the object using literals 
const twitterUser = {}
//suppose this user having an id 
twitterUser.id = "@usertweet"
//name of the twitter user
twitterUser.name = "Motu"
//login status
twitterUser.isLoggedIn = false


//now lets print all the value
// console.log(twitterUser)

const regularUser = {
    email: "nd@gamil.com",
    fullname: {
        username: {
            firstname: "NIKHIL",
            lastname: "DUBEY"
        }
    }
}

//now how we can access the nested object's
console.log(regularUser.fullname.username.firstname)

//optional syntax //putting the question mark is called opetioal syntax if this option is not present in the oject then it will not raise error
console.log(regularUser.fullname?.username.firstname)

//how we can conbine two objects 
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

//not a correct method
//const obj3 = {obj1,obj2}
//console.log(obj3)


//first correct method //but we use very rarely 
const obj3 = Object.assign({}, obj1, obj2)//here empty object is a target object and other object is a source object
console.log(obj3)


//most commonly use technique is this
const obj4 = { ...obj1, ...obj2 }
console.log(obj4)

//suppose i want to access all the keys which is present inside the twitterUser object
console.log(Object.keys(twitterUser))// output format is use as array

//same for values also
console.log(Object.values(twitterUser))// output format is use as array

//one more but less commonly use property that is entries 
console.log(Object.entries(twitterUser))// output format is use as array , it use to create array of key and its value

//suppose any value is not present in the object in that case put code can crash so for to now whether value is present in the object is not we use the hasOwnedProperty
console.log(twitterUser.hasOwnProperty("isLoggedIn"))// output format is True / false



