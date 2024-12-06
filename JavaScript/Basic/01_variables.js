const accountId = 144553 
let accountEmail = "nikhil@gmail.com"
var accountPassword = "12345"
accountCity = "Bilaspur" //not a good practice
let accountState;//if we not pass the value that it will define as undefined in the output

// accountId = 2 //not-allowed

accountEmail = "nd123@gmail.com"
accountPassword = "3566"
accountCity  = "raipur"
console.log(accountId)


/*prefer not to use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])