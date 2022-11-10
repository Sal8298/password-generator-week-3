// Global Variables.
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$","%", "&", "*", ";"];
var passwordLength;
var Randomiser;
var userWantsOptions =[];

// Write Password function initiates on Event "Click"
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Determines the length of the password generated.
  passwordLength = window.prompt("How many characters do you need your password to contain?");
   
  // Prevents user from choosing anything besides a number.
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
    window.alert("You must choose a number between 8 and 128.")
    return "Please try again.";
  }

  // Allows user to choose the type of characters they want in their password.
var userNeedsNumber = window.confirm("Do you need to have numbers in your password?");
var userNeedsUpperCase = window.confirm("Do you need to have uppercase letters in your password?");
var userNeedsLowerCase = window.confirm("Do you need to have lowercase letters in your password?");
var userNeedsSpecialChar = window.confirm("Do you need to have special characters in your password?");

// If statements to add the apopriately chosen char arrays to Options superset array.
if (userNeedsNumber) {
  userWantsOptions = userWantsOptions.concat(number);
}

if (userNeedsUpperCase) {
  userWantsOptions = userWantsOptions.concat(upperCase);
}

if (userNeedsLowerCase) {
  userWantsOptions = userWantsOptions.concat(lowerCase);
}

if (userNeedsSpecialChar) {
  userWantsOptions = userWantsOptions.concat(specialChar);
} 

// Prevents user from not picking any char type.
if (userWantsOptions.length === 0) {
  return "You must select at least one character type. Please try again."
}

var myPassword = "";

// For loop that generates a randomised password based on selected criteria.
for (var index = 0; index < passwordLength; index++) {
  Randomiser = Math.floor(Math.random() * userWantsOptions.length)
  myPassword += userWantsOptions[Randomiser];

} 
// Makes generated password appear in textbox on loaded.
return myPassword; 
}