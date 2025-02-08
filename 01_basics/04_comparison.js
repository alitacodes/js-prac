// console.log("2" > 1); // different data types comparison
//                       // gives true, but sometimes may give unpredictable o/p
//                       // preferred to compare two values of same data type
// console.log("02" > 1);


/* AVOID these types of comparisons */
console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
//this condition occurs because an equality check(==) and comparison operator(>=, <=, >, <)works differently 
//comparison convert null to a number, treating it as 0
// that's why (3)null>=0 is true, (1)null>0 is false

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false

// === strict check => checks value and data type
console.log(2 === "1");     //false
console.log(2 === "2");     //false
console.log(2 === 2);       //true
