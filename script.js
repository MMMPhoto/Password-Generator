// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define parameters of possible characters based on user input
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate Password
function generatePassword () {
  passwordText = [];
  // Prompt user for desired length of password
  var passwordLength = prompt("Hello. Please select a character length for your password. Password must be between 8 and 128 characters in length.");

  // Check to make sure user entered a number between 8 and 128
  while (isNaN(passwordLength)) {
    passwordLength = prompt("Please try again. Password must be a number.");
  }
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please try again. Password must be between 8 and 128.");
    if (isNaN(passwordLength)) {
      passwordLength = prompt("Please try again. Password must be a number.");
    }
  }

  // Ask user to select parameters
  while (!wantLowerCase && !wantUpperCase && !wantNumbers && !wantSpecial) {
    var wantLowerCase = confirm("Would you like to use lower case characters in your password? Click OK for Yes, Cancel for No.");
    var wantUpperCase = confirm("Would you like to use upper case characters in your password? Click OK for Yes, Cancel for No.");
    var wantNumbers = confirm("Would you like to use numbers in your password? Click OK for Yes, Cancel for No.");
    var wantSpecial = confirm("Would you like to use special characters in your password? Click OK for Yes, Cancel for No.");
    if (!wantLowerCase && !wantUpperCase && !wantNumbers && !wantSpecial) {
      confirm("At least one parameter must be selected");
    }
  }

  // Build Array for Random Dataset
  var randomDataset = [];
  if (wantLowerCase) {
    randomDataset = lowerCase.concat();
  }
  if (wantUpperCase) {
    randomDataset = upperCase.concat(randomDataset);
  }
  if (wantNumbers) {
    randomDataset = numbers.concat(randomDataset);
  }
  if (wantSpecial) {
    randomDataset = special.concat(randomDataset);
  }

  console.log(`var "randomDataset" = ${randomDataset}`);

  //Random function
  var randomPassword = getRandom();
  function getRandom() {
    var randomString = "";
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * randomDataset.length);
      randomString += randomDataset[random];
    }
    return randomString;
  }

  // Output Random Result
  return randomPassword;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
