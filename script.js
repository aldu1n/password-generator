// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var  lowerCase ='abcdefghijklmnopqrstuvwxyz';
var  numbers = '0123456789';
var  symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

let randomPassword = "";

let allCharacters = upperCase + lowerCase + numbers + symbols;
// create the function here //done 

// prompt to get the number of characters in password // done

// need 4 ifs with 4 confirmExpressionconditionals //done

// processing...

// return password

//   return "turtle"; // if turtle is a password

function createPassword(){
  var getPasswordLength = function() {
  var length = window.prompt("Enter your desired password length (between 8 and 128 characters)");
  var min = 8;
  var max = 128;
  if (length <= max && length >= min ){
    return length;
  }
  };


  var passwordLength = getPasswordLength();
  if (typeof passwordLength === "undefined"){
    alert("Incorrect input! Please enter a number between 8 and 128.");
    return createPassword();
  }
  console.log(passwordLength);

  var confirmUpperCase = window.confirm ("Click OK, if you want your password to include uppercase letters.")
  if (confirmUpperCase){
    alert ("Your password will include uppercase letters!");
  }
  else {
    alert ("Your password won't include uppercase letters!");
  }

  var confirmLowerCase = window.confirm ("Click OK, if you want your password to include lowercase letters.")
  if (confirmLowerCase){
    alert ("Your password will include lowercase letters!");
  }
  else {
    alert ("Your password won't include lowercase letters!");
  }

  var confirmNumbers = window.confirm ("Click OK, if you want your password to include numbers.")
  if (confirmNumbers){
    alert ("Your password will include numbers!");
  }
  else {
    alert ("Your password won't include numbers!");
  }

  var confirmSymbols = window.confirm ("Click OK, if you want your password to include symbols.")
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

  if (confirmUpperCase === true){
  for (i = 0; i < passwordLength; i ++) {
    // randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    randomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
}
}
if (confirmLowerCase === true){
  for (i = 0; i < passwordLength; i ++) {
    randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
}
if (confirmNumbers === true){
  for (i = 0; i < passwordLength; i ++) {
    randomPassword += numbers[Math.floor(Math.random() * numbers.length)];
}
}
if (confirmSymbols === true){
  for (i = 0; i < passwordLength; i ++) {
    randomPassword += symbols[Math.floor(Math.random() * symbols.length)];
}
}
  console.log(randomPassword);
  return randomPassword;

}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

writePassword()

// Add event listener to generate button
generateBtn.setAttribute("style", ":hover")
generateBtn.addEventListener("click", createPassword);
