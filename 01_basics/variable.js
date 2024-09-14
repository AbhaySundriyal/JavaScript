const accountid=14453
let accountemail="abc@gmail.com"
var accountcity="12345"
accountpaswrod="543321"
let accounstate
accountid=78654
console.log(accountid); /*  it will not change error comes*/
console.table([accountcity,accountemail,accountpaswrod,accounstate]) /* it will chagne the value
and value of account stsate is undefined */ 

/* prefer not to use var keyword
because of issue in block scope and functional scope*/
