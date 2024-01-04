const accountId = 144553                 // can't be changed 
let accountEmail = "hitesh@google.com"  
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //undefined 


// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])