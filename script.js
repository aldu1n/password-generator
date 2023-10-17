// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var  lowerCase ='abcdefghijklmnopqrstuvwxyz';
var  numbers = '0123456789';
var  symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

var randomPassword = "";

var allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword(){

  var getPasswordLength = function() {
  var length = window.prompt("Enter your desired password length (between 8 and 128 characters)");
  var min = 8;
  var max = 128;
  if (length <= max && length >= min ){
    return length;
  }
}



  var passwordLength = getPasswordLength();
  if (typeof passwordLength === "undefined"){
    alert("Incorrect input! Please enter a number between 8 and 128.");
    return createPassword();
  }
  console.log(passwordLength);


  var confirmUpperCase = window.confirm ("Click OK, if you want your password to include uppercase letters.");
  if (confirmUpperCase === true){
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

  if (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSymbols === false){
    alert ("Select at least one option!");
    return createPassword();
  }

  // var upperAndLower = upperCase + lowerCase;
  // var upperAndNumbers = upperCase + numbers;
  // var upperAndSymbols = upperCase + symbols;
  // var upperAndLowerAndNumbers = upperCase + lowerCase + numbers;
  // var upperAndLowerAndSymbols = upperCase + lowerCase + symbols;
  // var upperAndSymbolsAndNumbers = upperCase + lowerCase + numbers;

    if (confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    }
    else if (confirmUpperCase && confirmLowerCase && !confirmNumbers && !confirmSymbols) {
      for (i = 0; i < passwordLength; i++){
      randomPassword += upperAndLower[Math.floor(Math.random() * upperAndLower.length)];
      }
    }
    else if (confirmUpperCase && confirmLowerCase && confirmNumbers && !confirmSymbols) {
      for (i = 0; i < passwordLength; i++){
        randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)].concat(lowerCase[Math.floor(Math.random() * lowerCase.length)]).concat(numbers[Math.floor(Math.random() * numbers.length)]);
        }
    }

    if (confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    }
    else if (!confirmUpperCase && confirmLowerCase && confirmNumbers && !confirmSymbols) {

    }
    else if (!confirmUpperCase && confirmLowerCase && !confirmNumbers && confirmSymbols) {

    }

    if (confirmNumbers && !confirmUpperCase && !confirmLowerCase && !confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += numbers[Math.floor(Math.random() * numbers.length)];
    }
    }

    if (confirmSymbols && !confirmUpperCase && !confirmLowerCase && !confirmNumbers){
      for (i = 0; i < passwordLength; i++) {
        randomPassword += symbols[Math.floor(Math.random() * symbols.length)];
    }
    }

    if (confirmUpperCase && confirmLowerCase && confirmNumbers && confirmSymbols){
      for (i = 0; i < passwordLength; i++) {
          randomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    }

    writePassword();
    
    function writePassword() {
      var passwordText = document.querySelector("#password");
      passwordText.value = randomPassword;
    }

  }

generateBtn.addEventListener("click", createPassword);
