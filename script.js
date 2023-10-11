// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterSets = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
};
// create the function here //done 

// prompt to get the number of characters in password // done

// need 4 ifs with 4 confirmExpressionconditionals

// processing...

// return password

//   return "turtle"; // if turtle is a password

function createPassword(){
  var getPasswordLength = function() {
  var length = window.prompt("Enter your desired password length (between 8 and 128 characters)");
  var min = 8;
  var max = 128;
  if(parseInt(length) && (length >= min && length <= max)){
    return length;
  }
  };


  var passwordLength = getPasswordLength();
  console.log(passwordLength);
}


// Write password to the #password input
// function writePassword() {
//   var password = createPassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.setAttribute("style", ":hover")
generateBtn.addEventListener("click", createPassword);
