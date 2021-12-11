// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declares + initializes array of upper case characters
const upperCase = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));

// Declares + initializes array of lower case characters
const lowerCase = upperCase.map((i) => i.toLowerCase());

// Declares + initializes array of digits 0 through 9
const numbers = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));

// Declares + initializes array of special characters
const special = [...Array(15)]
  .map((val, i) => String.fromCharCode(i + 33))
  .concat([...Array(7)].map((val, i) => String.fromCharCode(i + 58)));

var chosenLength;
var chosenCategories = special.concat(lowerCase);
var finalPassword;

// TODO: Improve validation for password length (currently accepts non-numeric input from user)
// TODO: Remove all instances of 'console.log()' once code is working

// Prompts the user to choose a password length between 8 and 128 characters long
const chooseLength = function(userInputLength) {
  var userInputLength = prompt("Choose your password length.");
  if (userInputLength < 8) {
    alert("Your password cannot be less than 8 characters.");
    chooseLength();
  } else if (userInputLength > 128) {
    alert("Your password cannot be more than 128 characters.");
    chooseLength();
  } else {
    console.log(userInputLength)
    chosenLength = userInputLength;
  }
}

// Function to concatenate array(s) of upperCase; lowerCase; numbers; and special
const chooseCategories = function () {
    var growingArray = [];
  if (confirm("Do you want your password to contain upper case letters?")) {
    growingArray = growingArray.concat(upperCase);
  }
  if (confirm("Do you want your password to contain lower case letters?")) {
    growingArray = growingArray.concat(lowerCase);
  }
  if (confirm("Do you want your password to contain numbers?")) {
    growingArray = growingArray.concat(numbers);
  }
  if (confirm("Do you want your password to contain special characters?")) {
    growingArray = growingArray.concat(special);
  }
  if (growingArray.length == 0) {
      alert("You must choose at least one category.");
      chooseCategories()
  } else {
    console.log(growingArray)  
    chosenCategories = growingArray;
  }
}


var getRandomCharacter = function() {
  ;
  return randomCharacter;
} 


console.log(chosenCategories);
console.log(chosenCategories[Math.floor[Math.random() * chosenCategories.length]]);

// Function to choose n random items from the chosenCategories array, where n = chooseLength
// const buildPassword = function () {
//     var growingPassword = '';
//     var randomCharacter = chosenCategories[Math.floor[Math.random()*chosenCategories.length]];
// }

// var generatePassword = function() {
//     chooseLength();
//     chooseCategories();
//     buildPassword();
//     return finalPassword;
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
  TODONE: series of prompts
    TODONE: select length 
      TODONE: between 8 and 128 characters
    TODONE: character types to include
      lowercase; uppercase; numeric; special characters
    TODO: validates answers
      TODONE: at least one selected
  TODO: generates password matching criteria
    TODO: either displayed in alert or written to page
*/
