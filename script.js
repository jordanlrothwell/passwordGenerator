// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declares + initializes array of upper case characters
const upperCase = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));

// Declares + initializes array of lower case characters
const lowerCase = upperCase.map(i => i.toLowerCase());

// Declares + initializes array of digits 0 through 9
const numbers = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));

// Declares + initializes array of special characters
const special = [...Array(15)].map((val, i) => String.fromCharCode(i + 33)).concat([...Array(7)].map((val, i) => String.fromCharCode(i + 58)));

// Prompts the user to choose a password length between 8 and 128 characters long
function choosePasswordLength() {
    var passwordLength = prompt("Choose your password length.");
    if (passwordLength < 8) {
      alert("Your password cannot be less than 8 characters.");
      choosePasswordLength()
    } else if (passwordLength > 128) {
      alert("Your password cannot be more than 128 characters.")
      choosePasswordLength()
    } else {
      console.log(passwordLength)
        }
    }

choosePasswordLength()16

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