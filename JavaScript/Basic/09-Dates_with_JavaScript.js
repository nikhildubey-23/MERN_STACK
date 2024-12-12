let myDate = new Date();
console.log(myDate); //basically it give me the output like this , 2024-12-12T03:44:10.396Z

//let we use some method to concise
console.log(myDate.toString()); //output :- Thu Dec 12 2024 09:18:16 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //output:- Thu Dec 12 2024
console.log(myDate.toLocaleDateString()); //output:- 12/12/2024
console.log(myDate.toLocaleString()); //output:-12/12/2024, 9:20:48 AM

//suppose now i want to create my own date then how?
let myCreatedDate = new Date(2025, 9, 27); //year-in-number,month-in-number-index-starting-from-0,date-in-number
console.log(myCreatedDate.toDateString());
//another method to do that yy-mm-dd
let myCreatedDate2 = new Date("2023-01-16");
console.log(myCreatedDate2.toDateString());
//mm-dd-yy
let myCreatedDate3 = new Date("01-31-2023");
console.log(myCreatedDate3.toDateString());

//now suppose we are organizing any quiz round there i want to check who solved fist then how we can create a time stamp lets see
const d = new Date(Date.now());
let time = d.getTime();
console.log(time);
