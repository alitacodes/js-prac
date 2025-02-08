let score = "33" //string
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score) //typecasting
// console.log(typeof valueInNumber);

let score1 = "33abc"
let valueNumber = Number(score1)
// console.log(typeof valueNumber); 
// console.log(valueNumber);
/* when we show the typeof 33abc, it gives number, but when we show what is tored in valueNumber, it shows NaN(not a number)
*/

/* when changed to number and showed what is stored like above
"33" => 33
"33abc" => NaN
true => 1
null => 0
undefined => NaN
*/

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//shows true => 1
// false => 0
// "" => false
// "Sneha" => true

let randNum = 77
let stringNum = String(randNum)
// console.log(stringNum)
// console.log(typeof stringNum)

//***********OPERATIONS**********
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+4);
// console.log(2-2);
// console.log(2*3);
// console.log(2**4);
// console.log(2/4);
// console.log(2%2);

let str1 = "Sneha"
let str2 = " Mandal"

let str3 = str1+str2
// console.log(str3);

// console.log("1"+ 2); //string + int
// console.log(1+ "2"); //int + string
// console.log("1"+ "2"); // string + string
//ECMA script guidelines (to primitive)
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 +"2"); //32

console.log(+true); //1
console.log(+""); //0

let 





