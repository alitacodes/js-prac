// let score = "33" //string
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score) //typecasting
// console.log(typeof valueInNumber);

// let score1 = "33abc"
// let valueNumber = Number(score1)
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
console.log(booleanIsLoggedIn);
//shows true => 1
// false => 0
// "" => false
// "Sneha" => true

let randNum = 77
let stringNum = String(randNum)
console.log(stringNum)
console.log(typeof stringNum)
