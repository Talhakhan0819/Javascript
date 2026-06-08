const accountId = 14457
let accountEmail = "talha@google.com"
var accountPassword = "12345"
accountCity = "Peshawar"

// accountId = 2 // Not allowed because accountId is a constant
accountEmail = "tl@google.com"
accountPassword = "54321"
accountCity = "Islamabad"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var,
because of issue in block scope and function scope
*/