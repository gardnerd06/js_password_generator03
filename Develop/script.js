// Assignment Code

var generateBtn = document.querySelector("#generate");
var numeric;
var lower;
var upper;
var special;

(lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]),
  (upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]),
  (numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  (special = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    " < ",
    "=",
    " > ",
    " ? ",
    "@",
    "[",
    "\\",
    "]",
    " ^ ",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ]);
// Write password to the #password input
function writePassword() {
  enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  specialAnswer = confirm("Would you like to use special characters?");
  numericAnswer = confirm("Would you like to use numeric characters?");
  lowerAnswer = confirm("Would you like to use lowercase characters?");
  upperAnswer = confirm("Would you like to use uppercase characters?");

  charSets = lower && upper && numeric && special;
  var pass = "";
  var results = "";

  if (specialAnswer === true) {
    special + results;
  } else {
    specialAnswer = false;
  }
  if (numericAnswer === true) {
    numeric + results;
  } else {
    numericAnswer = false;
  }
  if (lowerAnswer === true) {
    lower + results;
  } else {
    lowerAnswer = false;
  }
  if (upperAnswer === true) {
    upper + results;
  } else {
    upperAnswer = false;
  }

  for (var i = 0; i < length; i++) {
    password = results[i](Math.floor(Math.random() * results.length));

    pass = results(password);

    // var  = writePassword();
    // var password = document.querySelector("#password");
    // document.getElementById("Your Secure Password").placeholder = pass;
    prompt(pass);
  }
  // console.log(pass);

  // return pass;

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
