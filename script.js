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

// Declares global placeholder variables for the functions which follow
var chosenLength;
var chosenCategories;
var finalPassword;

// Prompts the user to choose a password length between 8 and 128 characters long
const chooseLength = function (userInputLength) {
  var userInputLength = prompt("Choose your password length.");
  if (userInputLength === null) {
    return;
  } else if (isNaN(userInputLength)) {
    alert("Please enter a number between 8 and 128.");
    chooseLength();
  } else if (userInputLength < 8) {
    alert("Your password cannot be less than 8 characters.");
    chooseLength();
  } else if (userInputLength > 128) {
    alert("Your password cannot be more than 128 characters.");
    chooseLength();
  } else {
    console.log(userInputLength);
    chosenLength = userInputLength;
  }
};

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
    chooseCategories();
  } else {
    console.log(growingArray);
    chosenCategories = growingArray;
  }
};

// Takes two arguments, 'n' and Builds the user's password by declaring an empty string, then randomly selecting items from the 'chosenCategories' array and concatenating them.
var buildPassword = function (n, arr) {
  var i = 0;
  var growingPassword = "";
  while (i < n) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    growingPassword = growingPassword.concat(chosenCategories[randomNumber]);
    i++;
  }
  console.log(growingPassword); // Logs to console
  finalPassword = growingPassword;
};

var generatePassword = function () {
  chooseLength();
  chooseCategories();
  buildPassword(chosenLength, chosenCategories);
  console.log(finalPassword); // Logs to console
  return finalPassword;
};

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
  TODONE: generates password matching criteria
    TODONE: either displayed in alert or written to page
*/
