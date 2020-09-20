// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  generateBtn.addEventListener("click", function(){
    var passwordLength = prompt("How many characters would you like your password to be? (8-128 characters");
    var password = "";
    if (passwordLength < 8){
      alert("Password can be no less than 8 characters.")
    }
    else if(passwordLength > 128){
      alert("Password can be no longer than 128 characters.")
    }
    else{
      var lower = confirm("Would you like lowercase characters in your password?");
      var upper = confirm("Would you like uppercase characters in your password?");
      var numeric = confirm("Would you like numeric characters in your password?");
      var special = confirm("Would you like special characters in your password?");
      
      if(lower == true && upper == true && numeric == true && special == true){
        var characters = "abcdefghijklmnopqrstuvwxyz234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+<>"
        for (var x = 0; x < passwordLength; x++) {
          var i = Math.floor(Math.random() * characters.length);
          password += characters.charAt(i);
        }
       
      }
    }
  })
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
