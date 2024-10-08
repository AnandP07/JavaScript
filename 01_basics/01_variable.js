const accountId = 15544
let accountEmail = "abc@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail = "sdf@gmail.com"
accountPassword = "qwe234"
accountCity = "Noida"

console.table([accountId, accountEmail, accountPassword, accountCity])