// Assignment code here

// Specify initial variables that are applied throughout this entire code
var passwordLength;
var charactersAllowed = [];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Asks the user a series of prompts for their password criteria
function prompts() {
  passwordLength = prompt("How many characters should your password have? (Please input a number from 8 - 128)");
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("This input is not valid. Your input should be a number that is at least 8 and no more than 128. Please try again");
  }
  var promptAnswer; 
  
  promptAnswer = prompt("Do you want your password to have lowercase characters? (yes or no)");
  if (promptAnswer == 'yes'){
    charactersAllowed = charactersAllowed.concat(lowercaseCharacters);
  }

  promptAnswer = prompt("Do you want your password to have uppercase characters? (yes or no)");
  if (promptAnswer == 'yes'){
    charactersAllowed = charactersAllowed.concat(uppercaseCharacters);
  }

  promptAnswer = prompt("Do you want your password to have special characters? (yes or no)");
  if (promptAnswer == 'yes'){
    charactersAllowed = charactersAllowed.concat(specialCharacters);
  }

  promptAnswer = prompt("Do you want your password to have numbers? (yes or no)");
  if (promptAnswer == 'yes'){
    charactersAllowed = charactersAllowed.concat(numbers);
  }

  return true; 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finishedPrompts = prompts();

  if(finishedPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Use a random number generator to randomly pick out a sequence of characters from an array of characters allowed as specified by the user's answers to the prompts
function generatePassword() { 
  var password = "";
  for(var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * charactersAllowed.length);
    password += charactersAllowed[randomIndex];
  }
  return password;
}
