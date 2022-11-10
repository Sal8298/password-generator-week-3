// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$","%", "&", "*", ";"];
var passwordLength;
var Randomiser;
var userWantsOptions =[];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = window.prompt("How many characters do you need your password to contain?");
    
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
    window.alert("You must choose a number between 8 and 128.")
    return "Please try again.";
  }

var userNeedsNumber = window.confirm("Do you need to have numbers in your password?");
var userNeedsUpperCase = window.confirm("Do you need to have uppercase letters in your password?");
var userNeedsLowerCase = window.confirm("Do you need to have lowercase letters in your password?");
var userNeedsSpecialChar = window.confirm("Do you need to have special characters in your password?");

// var userWantsOptions =[];

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

if (userWantsOptions.length === 0) {
  return "You must select at least one character type. Please try again."
}

var myPassword = "";

for (var index = 0; index < passwordLength; index++) {
  Randomiser = Math.floor(Math.random() * userWantsOptions.length)
  myPassword += userWantsOptions[Randomiser];

} 
console.log(myPassword);
return myPassword; 
}

/*
Parese sub-arrays and rerun until at least one of each selected type appear in the password.

function RandomMath() {
  for (var index = 0; index < passwordLength; index++) {
  Randomiser = Math.floor(Math.random() * userWantsOptions.length)
  password += userWantsOptions[Randomiser];
  }
} 

if (userNeedsNumber === true) 
for (let index = 0; index < password.length; index++) {
  var numberCount = number.includes(password.charAt(index));
  console.log(numberCount); 

  */