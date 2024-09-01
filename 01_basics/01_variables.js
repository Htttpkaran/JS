const accountId = 144553
let accountEmail = "Karan@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scpoe
*/
accountEmail = "Raj@mail.com"
accountPassword = "6789"
accountCity = "Kanpur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])