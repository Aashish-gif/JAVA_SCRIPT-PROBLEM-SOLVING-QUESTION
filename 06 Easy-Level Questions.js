
// QUESTION 6. Write a function that checks if a username and password match predefined values. 
// If the username is "admin" and the password is "1234", print "Login successful"; 
// otherwise, print "Login failed."


let username="admin";
let password=1234;
function login(){
if(username=="admin" && password==1234){
    console.log("login succesful");
}
else{
    console.log("login failed")
}
}
login()
