const accountId=12345;
let accountName="Rajesh";
var accountEmail="Rajesh@Gmail.com";
 accountPassword="000"; //We can declare vaiable without using let,var keywords but this is not a good practise //
 let accountState; // This is undefined  variable 

 /*  We can use console.log() but instead of writing again and again we can use console.table to display 
 all variable at one time  */

console.table([accountId, accountEmail, accountName, accountPassword, accountState])

// Note : Nevar use var keyword to avoid block scope and functional scope issues 