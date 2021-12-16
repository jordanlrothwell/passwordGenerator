// Select our generate password button & assign it to a variable.
var generateBtn = document.querySelector("#generate");

// Declare & initialise arrays of:
// Upper case letters;
const upperCase = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));

// Lower case letters;
const lowerCase = upperCase.map((i) => i.toLowerCase());

// Digits 0 through 9; and
const numbers = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));

// Special characters.
const special = [...Array(15)]
  .map((val, i) => String.fromCharCode(i + 33))
  .concat([...Array(7)].map((val, i) => String.fromCharCode(i + 58)));

// Declare global placeholder variables for the functions which follow.
var chosenLength;
var chosenCategories;
var finalPassword;

// Prompt dialoge - ask the user to choose a password length between 8 and 128 characters long.
const chooseLength = function (userInputLength) {
  var userInputLength = prompt("Choose your password length.");
  // Disallow non-numeric entries.
  if (isNaN(userInputLength)) {
    alert("Please enter a number between 8 and 128.");
    chooseLength();
  } else if (userInputLength < 8) {
    alert("Your password cannot be less than 8 characters.");
    chooseLength();
  } else if (userInputLength > 128) {
    alert("Your password cannot be more than 128 characters.");
    chooseLength();
    // Once we have a number meeting the criteria, assign it to the global variable we declared earlier.
  } else {
    chosenLength = userInputLength;
  }
};

// Confirmation dialogue - ask the user to confirm which types of characters they would like in their password.
const chooseCategories = function () {
  // Create an empty array...
  var growingArray = [];
  // ... then concatenate the arrays we declared above depending on the user's response.
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
  // If the array is empty, repeat the confirmation dialogues until the user chooses at least one category.
  if (growingArray.length == 0) {
    alert("You must choose at least one category.");
    chooseCategories();
    // Once we have at least one category, assign the result to the global variable we declared earlier.
  } else {
    chosenCategories = growingArray;
  }
};

// Build the password by creating an empty string, then randomly selecting characters from our new array containing all chosen categories and adding 
// them to the string one at a time. Takes two arguments: 'n': the chosen password length; and 'arr': the array containing all chosen categories.
// Once we have added enough characters, assign the result (i.e. our final password) to the global variable we initialised above.
var buildPassword = function (n, arr) {
  var i = 0;
  // Declare a variable to store the password while we're building it.
  var growingPassword = "";
  while (i < n) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    growingPassword = growingPassword.concat(chosenCategories[randomNumber]);
    i++;
  }
  console.log(growingPassword); // Logs to console
  finalPassword = growingPassword;
};

// Create a function which calls each of the above functions in sequence, then returns the value of our final password variable.
var generatePassword = function () {
  chooseLength();
  chooseCategories();
  buildPassword(chosenLength, chosenCategories);
  return finalPassword;
};

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);