console.log(2>1);
console.log(2>=2);
console.log(2<2);
console.log(2<=2);
console.log(2!=2);


console.log("2">1); // js automaticaly convert str 2 to a number means integer
console.log(null > 0); //in js when we are using the greater than operator it use to convert null into a integer which value is 0 
console.log(null == 0);
console.log(null >= 0); //that is the reson why we are getting the true as a result over here.
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0); //ignor this type of comparision 
console.log(undefined >= 0 );
console.log(undefined < 0);


//strict checking using === here it use to check the value and the data type as well

let str2 = "90"
let str3 = 90
console.log(str2 === str3)
console.log(str2 == str3)//here i found that str convert into a integer thats why do i am getting the value true 



