// Assignment code here
var generatePassword = function () {
  var thisPassword = "";
  var charLength = parseInt(window.prompt("Chose a password length, 8-128 characters."));
  while (charLength > 128 || charLength < 8 || isNaN(charLength)) {
    window.alert("You must input a number between 8-128!");
    charLength = parseInt(window.prompt("Chose a password length, 8-128 characters."));
  }
  var upCase = window.confirm("Would you like uppercase characters?");
  var lowCase = window.confirm("Would you like lowercase characters?");
  var number = window.confirm("Would you like numeric characters?");
  var special = window.confirm("Would you like special characters?");
  console.log(charLength, upCase, lowCase, number, special);
  while (!upCase && !lowCase && !number && !special) {
    window.alert("You must pick at least one character option!");
    upCase = window.confirm("Would you like uppercase characters?");
    lowCase = window.confirm("Would you like lowercase characters?");
    number = window.confirm("Would you like numeric characters?");
    special = window.confirm("Would you like special characters?");
  }
  if (upCase) {
    var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    var upChar = "";
  }
  if (lowCase) {
    var lowChar = "abcdefghijklmnopqrstuvwxyz";
  } else {
    var lowChar = "";
  }
  if (number) {
    var numbChar = "0123456789";
  } else {
    var numbChar = "";
  }
  if (special) {
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else {
    var specialChar = "";
  }
  for (i = 0; charLength > i; i++) {
    var charOptions = upChar + lowChar + numbChar + specialChar;
    var randomChar = charOptions.charAt(Math.random() * charOptions.length + 1);
    thisPassword += randomChar;
  }
  return thisPassword;
}
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