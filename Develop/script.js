// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

function generatePassword(){
    var passwordLength = prompt("How many characters would you like your password to be? (8-128 characters");
    
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
      
      function forpass(){
        for (var x = 0; x < passwordLength; x++) {
          var i = Math.floor(Math.random() * characters.length);
          password += characters.charAt(i);
        }
      }

      if(lower == true && upper == true && numeric == true && special == true){
        var characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == false && upper == true && numeric == true && special == true){
        var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == true && upper == false && numeric == true && special == true){
        var characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == true && upper == true && numeric == false && special == true){
        var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == true && upper == true && numeric == true && special == false){
        var characters = "abcdefghijklmnopqrstuvwxyz234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        forpass();
      }
      else if(lower == false && upper == false && numeric == true && special == true){
        var characters = "1234567890!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == false && upper == true && numeric == false && special == true){
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == false && upper == true && numeric == true && special == false){
        var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        forpass();
      }
      else if(lower == true && upper == false && numeric == false && special == true){
        var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>"
        forpass();
      }
      else if(lower == true && upper == false && numeric == true && special == false){
        var characters = "abcdefghijklmnopqrstuvwxyz1234567890"
        forpass();
      }
      else if(lower == true && upper == true && numeric == false && special == false){
        var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        forpass();
      }
      else if(lower == true && upper == false && numeric == false && special == false){
        var characters = "abcdefghijklmnopqrstuvwxyz"
        forpass();
      }
      else if(lower == false && upper == true && numeric == false && special == false){
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        forpass();
      }
      else if(lower == false && upper == false && numeric == true && special == false){
        var characters = "1234567890"
        forpass();
      }
      else if(lower == false && upper == false && numeric == false && special == true){
        var characters = "!@#$%^&*()-+<>"
        forpass();
      }
      else{
        alert("You must at minimum choose one character attribute");
      }
      writePassword();
    }
  }

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
