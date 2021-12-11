// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
  TODO: series of prompts
    TODO: select length 
      TODO: between 8 and 128 characters
    TODO: character types to include
      lowercase; uppercase; numeric; special characters
    TODO: validates answers
      TODO: at least one selected
  TODO: generates password matching criteria
    TODO: either displayed in alert or written to page
*/