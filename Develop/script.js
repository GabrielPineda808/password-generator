// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  var passwordLength = prompt("How many characters would you like your password to be? (8-128 characters");
  if (passwordLength < 8){
    alert("Password can be no less than 8 characters.")
  }
  else if(passwordLength > 128){
    alert("Password can be no longer than 128 characters.")
  }
})
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
