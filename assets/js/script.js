// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$","%", "&", "*", ";"];
var passwordLength;
var Randomiser;

function generatePassword() {
  passwordLength = window.prompt("How many characters do you need your password to contain?");
  if (passwordLength === null) {
    return;
  } else if (isNaN(passwordLength)) {
    window.alert("You must choose a number!")
    return "Please try again.";
  } else if (passwordLength < 8 || passwordLength > 128) { 
    window.alert("You must choose a number between 8 and 128.")
    return "Please try again.";
  }

var userNeedsNumber = window.confirm("Do you need to have numbers in your password?");
var userNeedsUpperCase = window.confirm("Do you need to have uppercase letters in your password?");
var userNeedsLowerCase = window.confirm("Do you need to have lowercase letters in your password?");
var userNeedsSpecialChar = window.confirm("Do you need to have special characters in your password?");

var userWantsOptions =[];

if (userNeedsNumber === true) {
  userWantsOptions.push(number);
}

if (userNeedsUpperCase === true) {
  userWantsOptions.push(upperCase);
}

if (userNeedsLowerCase === true) {
  userWantsOptions.push(lowerCase);
}

if (userNeedsSpecialChar === true) {
  userWantsOptions.push(specialChar);
}

// if (userWantsOptions.length === 0) {
//   userNeedsLowerCase.push(lowerCase);
// }

var myPassword = [];

for (var index = 0; index < passwordLength.length; index++) {
  Randomiser = Math.floor(Math.random() * userWantsOptions.length)
  myPassword.push(userWantsOptions[Randomiser]);
  
} if (userWantsOptions.length === 0) {
  return "You must select at least one character type. Please try again."
}
return myPassword.toLocaleString();
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*

Choose length of password

Choose numbers

choose uppercase

choooses lowercase

choose specialchars

generate password

*/
