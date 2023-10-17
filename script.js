// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for each option
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var  lowerCase ='abcdefghijklmnopqrstuvwxyz';
var  numbers = '0123456789';
var  symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

var randomPassword = "";

var allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword(){

  // Prompt to enter the password lenght
  var getPasswordLength = function() {
  var length = window.prompt("Enter your desired password length (between 8 and 128 characters)");
  var min = 8;
  var max = 128;
  if (length <= max && length >= min ){
    return length;
  }
}


// If leanght is less than 8 or more than 128, or not a number, it shows an error and reruns the function
  var passwordLength = getPasswordLength();
  if (typeof passwordLength === "undefined"){
    alert("Incorrect input! Please enter a number between 8 and 128.");
    return createPassword();
  }

 //Confirmation for each of the options, if yes it confirms the option.
  var confirmUpperCase = window.confirm ("Click OK, if you want your password to include uppercase letters.");
  if (confirmUpperCase){
    alert ("Your password will include uppercase letters!");
  }
  else {
    alert ("Your password won't include uppercase letters!");
  }


  var confirmLowerCase = window.confirm ("Click OK, if you want your password to include lowercase letters.");
  if (confirmLowerCase){
    alert ("Your password will include lowercase letters!");
  }
  else {
    alert ("Your password won't include lowercase letters!");
  }

  var confirmNumbers = window.confirm ("Click OK, if you want your password to include numbers.");
  if (confirmNumbers){
    alert ("Your password will include numbers!");
  }
  else {
    alert ("Your password won't include numbers!");
  }

  var confirmSymbols = window.confirm ("Click OK, if you want your password to include symbols.");
  if (confirmSymbols){
    alert ("Your password will include symbols!");
  }
  else {
    alert ("Your password won't include symbols!");
  }
  //If none options were selected, it tells to select at least one of them , and reruns the function
  if (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSymbols === false){
    alert ("Select at least one option!");
    return createPassword();
  }

  // All password combinations for uppercase
    if (confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
      }
    }

    else if (confirmUpperCase && confirmLowerCase && !confirmNumbers && !confirmSymbols) {
      for (i = 0; i < passwordLength/2; i++){
      randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat((lowerCase[Math.floor(Math.random() * lowerCase.length)]));
      }
    }

    else if (confirmUpperCase && !confirmLowerCase && confirmNumbers && !confirmSymbols) {
      for (i = 0; i < passwordLength/2; i++){
      randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat((numbers[Math.floor(Math.random() * numbers.length)]));
      }
    }

    else if (confirmUpperCase && !confirmLowerCase && !confirmNumbers && confirmSymbols) {
      for (i = 0; i < passwordLength/2; i++){
      randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat((symbols[Math.floor(Math.random() * symbols.length)]));
      }
    }

    else if (confirmUpperCase && !confirmLowerCase && confirmNumbers && confirmSymbols) {
      for (i = 0; i < passwordLength/3; i++){
        randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat(numbers[Math.floor(Math.random() * numbers.length)],(symbols[Math.floor(Math.random() * symbols.length)]));
        }
    }

   // All password combinations for lowercase
    if (confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }
    }

    else if (!confirmUpperCase && confirmLowerCase && confirmNumbers && !confirmSymbols) {
      for (i = 0; i < passwordLength/2; i++){
        randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)].concat((numbers[Math.floor(Math.random() * numbers.length)]));
        }
    }

    else if (!confirmUpperCase && confirmLowerCase && !confirmNumbers && confirmSymbols) {
      for (i = 0; i < passwordLength/2; i++){
        randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)].concat((symbols[Math.floor(Math.random() * symbols.length)]));
        }
    }

    else if (!confirmUpperCase && confirmLowerCase && confirmNumbers && confirmSymbols) {
      for (i = 0; i < passwordLength/3; i++){
        randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)].concat(numbers[Math.floor(Math.random() * numbers.length)],(symbols[Math.floor(Math.random() * symbols.length)]));
        }
    }

    // All password combinations for numbers
    if (confirmNumbers && !confirmUpperCase && !confirmLowerCase && !confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += numbers[Math.floor(Math.random() * numbers.length)];
        }
    }

    else if (!confirmUpperCase && !confirmLowerCase && confirmNumbers && confirmSymbols) {
      for (i = 0; i < passwordLength/2; i++){
        randomPassword += numbers[Math.floor(Math.random() * numbers.length)].concat((symbols[Math.floor(Math.random() * symbols.length)]));
        }
    }

    else if (confirmUpperCase && confirmLowerCase && confirmNumbers && !confirmSymbols) {
      for (i = 0; i < passwordLength/3; i++){
        randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat(lowerCase[Math.floor(Math.random() * lowerCase.length)],(numbers[Math.floor(Math.random() * numbers.length)]));
        }
    }

   // All password combinations for symbols
    if (confirmSymbols && !confirmUpperCase && !confirmLowerCase && !confirmNumbers){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += symbols[Math.floor(Math.random() * symbols.length)];
        }
    }

    else if (confirmUpperCase && confirmLowerCase && !confirmNumbers && confirmSymbols) {
      for (i = 0; i < passwordLength/3; i++){
        randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat(lowerCase[Math.floor(Math.random() * lowerCase.length)],(symbols[Math.floor(Math.random() * symbols.length)]));
        }
    }

  // If each option is checked
    if (confirmUpperCase && confirmLowerCase && confirmNumbers && confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
          randomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
    }

    writePassword();
    
    //Function to write password in text field
    function writePassword() {
      var passwordText = document.querySelector("#password");
      passwordText.value = randomPassword;
    }

  }

  // Runs createPassword function on a click
generateBtn.addEventListener("click", createPassword);
