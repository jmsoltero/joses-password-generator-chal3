var upperCase;
var lowerCase;
var numBers;
var xtraSpecialCharacTers;

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "?", ">", "<", "/"];
let numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharactersAndNumbers = specialCharacters.concat(numbers);
let allLetters = upperCaseLetters.concat(lowercaseLetters);




//assignment code
var generateBtn = document.querySelector("#generate");



//write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

//function to generate password
function generatePassword(){
  generatePopup=parseInt(prompt('Password Length between 8 and 128.'));
  while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
    alert('Again, please enter a value between 8 and 28 >:(');
    generatePopup=parseInt(prompt('Password Length between 8 and 128.'));

  }

  if (generatePopup) {
    upperCase = confirm('UPPERCASE letters preferred?');
    console.log(upperCase);
    lowerCase = confirm('lowercase letters preferred?');
    console.log(lowerCase);
    numBers = confirm('numbers preferred?');
    console.log(numBers);
    xtraSpecialCharacTers = confirm('special characters preferred?');
    console.log(xtraSpecialCharacTers);
  }

  if (!upperCase && !lowerCase && !numBers && !xtraSpecialCharacTers) {
    userSelection = alert("You entered no values, can't make a password without values");
  }
  else if (upperCase && lowerCase && numBers && xtraSpecialCharacTers) {
    userSelection = numbers.concat(specialCharacters, lowercaseLetters, upperCaseLetters);
  }
  else if (upperCase && lowerCase && numBers) {
    userSelection = numbers.concat(lowercaseLetters, upperCaseLetters);
  }
  else if (upperCase && lowerCase && xtraSpecialCharacTers) {
    userSelection = specialCharacters.concat(lowercaseLetters, upperCaseLetters);
  }
  else if (upperCase && numBers && xtraSpecialCharacTers) {
    userSelection = numbers.concat(specialCharacters, upperCaseLetters);
  }
  else if (lowerCase && numBers && xtraSpecialCharacTers) {
    userSelection = numbers.concat(specialCharacters, lowercaseLetters);
  }
  else if (upperCase && lowerCase) {
    userSelection = upperCaseLetters.concat(lowercaseLetters); 
  }
  else if (upperCase && numBers) {
    userSelection = upperCaseLetters.concat(numbers);
  }
  else if (upperCase && xtraSpecialCharacTers) {
    userSelection = upperCaseLetters.concat(specialCharacters);
  }
  else if (numBers && lowerCase) {
    userSelection = numbers.concat(lowercaseLetters);
  }
  else if (xtraSpecialCharacTers && lowerCase) {
    userSelection = specialCharacters.concat(lowercaseLetters);
  }
  else if (xtraSpecialCharacTers && numBers) {
    userSelection = specialCharacters.concat(numbers);
  }
  else if (numBers) {
    userSelection = numbers;
  }
  else if (xtraSpecialCharacTers) {
    userSelection = specialCharacters;
  }
  else if (lowerCase) {
    userSelection = lowercaseLetters;
  }
  else if (upperCase) {
    userSelection = upperCaseLetters;
  }

  let emptyArray = [];
  for (let i = 0; i < generatePopup; i++) {
    console.log(userSelection);
    var mermaidSelection = userSelection[Math.floor(Math.random() * userSelection.length)];
    emptyArray.push(mermaidSelection);
  }
  console.log(emptyArray.join(''));
  return (emptyArray.join(''));
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

