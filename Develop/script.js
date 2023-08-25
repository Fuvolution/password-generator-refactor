// Assignment code here
var passwordLength;
var charactersAllowed = [];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePasword() is a function with no arguments passed into this 

//generates a Password based on specific criterias
// - length of the password
// - include lowercase letters or not
// - include uppercase letters or not
// - include numeric letters or not
// - include special characters or not

function generatePassword() { 
  
}

function prompts() {
  passwordLength = prompt("How many characters should your password have? (Please input a number from 8 - 128)");
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("This input is not valid. Your input should be a number that is at least 8 and no more than 128. Please try again");
  }
}
