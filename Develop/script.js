// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const lower = [
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
  ];
  const upper = [
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
  ];
  const special = [
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
    "=",
    "@",
    "[",
    "]",
    "{",
    "|",
    "}",
    "~",
  ];

  length = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  alert("You must select a choice to recieve a password!");

  var specialAnswer = confirm("Would you like to use special characters?");
  var numericAnswer = confirm("Would you like to use numeric characters?");
  var lowerAnswer = confirm("Would you like to use lowercase characters?");
  var upperAnswer = confirm("Would you like to use uppercase characters?");

  charSets = lower + upper + numeric + special;

  const results = [];
  const results2 = [];
  const results3 = [];
  const results4 = [];

  if (Boolean(specialAnswer === true)) {
    specialAnswer = results.concat(special);
  } else {
    specialAnswer = [];
  }

  if (Boolean(numericAnswer === true)) {
    numericAnswer = results2.concat(numeric);
  } else {
    numericAnswer = [];
  }
  if (Boolean(lowerAnswer === true)) {
    lowerAnswer = results3.concat(lower);
  } else {
    lowerAnswer = [];
  }

  if (Boolean(upperAnswer === true)) {
    upperAnswer = results4.concat(upper);
  } else {
    upperAnswer = [];
  }

  const data = specialAnswer.concat(numericAnswer, lowerAnswer, upperAnswer);

  console.log(data);
  console.log(charSets);

  var pass = "";

  // for (let i = 0; i <= length; i++) {
  // var word = Math.floor(Math.random() * data.length + 1);

  for (i = 0; i < length; i++) {
    var word = data[Math.floor(data.length * Math.random())];

    console.log(word);
    pass += word.charAt(word);
  }
  document.getElementById("password").placeholder = pass;
  console.log(pass);
  // var pass = document.querySelector("#password");
  alert("Here is your password!   " + pass);
}
// console.log(pass);
// return pass;

// for (var i = 0; i < length; i++) {
// password += data[i](Math.floor(Math.random() + 1));

// console.log(text);
// var  = writePassword();

// }
// }
// console.log(pass);

// return pass;

// passwordText.value = password;
// }

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
