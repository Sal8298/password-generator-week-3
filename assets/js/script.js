// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$","%", "&", "*", ";"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = window.prompt("How many characters do you want your password to contain?");
  if (passwordLength === null) {
    return;
  } else if (isNaN(passwordLength)) {
    window.alert("You must choose a number!")
    return "Please try again.";
  } else if (passwordLength < 8 || passwordLength > 128) { 
    window.alert("You must choose a number between 8 and 128.")
    return "Please try again.";
  }


var userWantsNumber = window.confirm("Do you want to have numbers in your password?");
var userWantsUpperCase = window.confirm("Do you want to have uppercase letters in your password?");
var userWantsUpperCase = window.confirm("Do you want to have lowercase letters in your password?");
var userWantsUpperCase = window.confirm("Do you want to have special characters in your password?");



}
/*

Choose length of password

Choose numbers

choose uppercase

choooses lowercase

choose specialchars

generate password

*/
