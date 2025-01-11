const accountId = 773355
let accountEmail = "penguin5@google.com"
var accountPassword = "12345678"
accountCity = "Kolkata"     //old code type
let accountState           
//gives "undefined" value when any value is not given to it

//accountId = 2 //not allowed
/*
Prefer not to use var
because of issue in block scopeand functional scope
*/
accountEmail = "hello45@google.com"
accountPassword = "3737373737"
accountCity = "Banglore"

console.log("accountId");
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])