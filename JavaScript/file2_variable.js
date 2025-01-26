//chapter 1 : JavaScript Essentials
let firstname = "Nikhil";
console.log(firstname);
firstname = "nidhi";
console.log(firstname); //means we can update the let key word

// for to create a variable there are three type
let name = "Rohan";
var sirname = "rathor";
const PI = 3.1656;

// these are the three type of variable
// drawback of these :- if we declare a variable using let then that variable is a block variable means it will work under the block {}.
//instead var is a globally access variable means it can be access as well as modified inside the whole script.
//const value is immutable(un-changeable)

//String DataType
//there are three way to declare string
//single quotes
//double quotes
//back tick
//lets see each of them one by one

//double quotes string
let myNameIs = "i am nikhil dubey";
console.log(myNameIs);

//using single quoted string
let myHobbyIs =
  "i am a coder who love to write code in various programming language";

//using backtick
let age = 22;
let myAgeIs = `i am ${age} year's old`;

//accessing all the value
console.log(myNameIs);
console.log(myHobbyIs);
console.log(myAgeIs);

//another primitive data type is Number
let num1 = 4568835655;
console.log(`i am number ${num1}`);

//whereas if there is a bigInt : do not forget to add n in postfix
let BigInt = 7676346387n;
console.log(`i am bigint ${BigInt}`);

// Boolan data type
// basically it consist only two things one is false and another one is true
let bool1 = true;
let bool2 = false;
console.log(`i am a value of boo1 ${bool1} and i am a value of bool2 ${bool2}`);

// Symbol  it a another primitive data type
//suppose we a same value of different variable and it hold the data type but we don't want that this two value are same then we use to declare them inside the symbol data type
let Name = "i am a devil";
let Name2 = "i am a devil";
console.log(Name === Name2); //definitely we will get the value true because values are same but after considering them as A symbol it is not
let Name3 = Symbol("i am a devil");
let Name4 = Symbol("i am a devil");
console.log(`after applying symbol data type ${Name3 === Name4}`);

//undefined primitive data type
let unassigned ; //leave it blank because assigning undefined manually is a wrong practice 
console.log(unassigned)

//null data type :- mean variable is empty but assigned with null value or you can say defined but value is null.
let definedNull = null
console.log(definedNull)

//typeof :- basically this operator is use to find the class of variable here the meaning of class in the datatype
let nr = 1
let str = "hello"
let booldt = true
let unde; 
let Nullof = null
console.log(typeof nr)
console.log(typeof str)
console.log(typeof booldt)
console.log(typeof unde)
console.log(typeof  Nullof)//remember that null is having datatype object rather than null it is a bug is js.

//converting data type there are three function : 1 String(): this is use to convert anything into string except null and undefined 
// 2. Number() :- it try to convert give data into number except null or undefined data type we will how down bellow
// 3. Boolean():- as we know that boolean hold two value one is true and another one is false it is true for all except zero,null and undefined 

let string = "22"
let number = Number(string)
console.log(`after converting string into number the result is ${number} and type of is ${typeof number}`)

// converting same number into the string
let numToString = String(number)
console.log(`after converting number into string the result is ${numToString} and type of is ${typeof numToString}`)


//converting any value to bool expect 0 , null and undefined 
let zero = 0
let unknow ;
let nullvalue = null
let numcheck = 19

console.log(Boolean(zero))
console.log(Boolean(unknow))
console.log(Boolean(nullvalue))
console.log(Boolean(numcheck))//getting true hence prove that boolean function use to give true in all the value expect null , zero and undefined 

//Arithmetic operator 
//Addition 
let num2 = 12
let num3 = 12
console.log(num2 + num3)

let str1 = "hello "
let str2 = "world"
console.log(str1 + str2)

//Subtraction 
console.log(num2 - num3)//0
console.log(str1 - num3)//NaN

//multiplication 
console.log(num2 * num3)//144
console.log(str1 * num3)//NaN
console.log(str1 * str2)//NaN

//division
console.log(num2 / num3)//1
console.log(str1 / num3)//NaN
console.log(str1 / str2)//NaN

//exponential
let expo1 = 23
let expo2 = 2
console.log(expo1 ** expo2) //23*23=529

//Modules Operator
console.log(expo1 % expo2)//basically it is use to return the reminder here 23/2 then we get 1 as our reminder 

//increment operator and decrement operator
let num4 = 4
num4++
console.log(num4)

//decrement
let num5 = 6
num5--
console.log(num5)

//prefix incrimination 
let num6 = 5
++num6
console.log(num6)

//prefix decrement operator
let num7 = 9 
--num7
console.log(num7)

//Assignment operator 
//we already saw one of them which is isequal to
let x =2

//another one is +=
x += 2 // x = x+2
       // x = 2+2
console.log(x) //4

//another operator is -=
x -= 2 //4-2 = 2
console.log(x)//2

//another operator is *=
x *= 6
console.log(x)

//another operator /=
x /= 3
console.log(x)

// another operator
x **= 2
console.log(x)

//another operator
x = x %2 
console.log(x)

//practice question 
let a = 23
let b = 45
let c = 89

// solution 1
console.log(a+b)
//solution 2
console.log(a/b)
//solution 3
c = c%b
console.log(c)
console.log(`${a} ${b} ${c}`)

//comparison operator 
let cm1 = 5;
let cm2 = "5";
console.log(cm1 == cm2);//here we only check the value not the datatype 

console.log(cm1 === cm2);//here we check the value as well as datatype

//lets see how not equal works
console.log(cm1 != cm2);//here we use the not equal operator to check the value not the datatype

//lets see how not equal to works for datatype also
console.log(cm1 !== cm2); 

//logical operator
//first we deal with grater then grater than equal to operator
let l1 = 23
let l2 = 45
console.log(l1 > l2)
console.log(l1 >= l2)
let l3 = 23
console.log(l1>=l3)

//same goes with smaller than and smaller than equal to
let s1 = 12
let s2 = 21
let s3 = 21
console.log(s1<s2)
console.log(s2<s3)
console.log(s1<=s3)

//logical operator
// AND 
let lo1 = 12
let lo2 = 23
let lo3 = 45
console.log(lo1 > lo2 && lo2 > lo3)//false
console.log(lo1 < lo2 && lo2 < lo3)//true
console.log(lo1 < lo2 && lo2 > lo3)//false

// OR
let or1 = 12
let or2 = 23
let or3 = 45
// most imp thig to remember is that in or operator we use pipes (||)
console.log(or1 > or2 || or2 > or3)//true
console.log(or1 < or2 || or2 < or3)//false
console.log(or1 < or2 || or2 > or3)//true

//NOT
let not1 = 12
let not2 = 23
let not3 = 45
console.log(!(not1 > not2))//true
console.log(!(not1 < not2))//false
