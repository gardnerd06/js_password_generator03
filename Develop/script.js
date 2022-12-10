// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Declared all arrays inside of function to be accessible
  const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  //Made arrays for each letter/number type I wanted to display
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
  //Created prompt inside function to alert users to input the character length.
  length = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  //set alert to notify users that they must make a choice to recieve a password
  alert("You must select a choice to recieve a password!");
  //created questions to give users control over which characters would be includes.
  var specialAnswer = confirm("Would you like to use special characters?");
  var numericAnswer = confirm("Would you like to use numeric characters?");
  var lowerAnswer = confirm("Would you like to use lowercase characters?");
  var upperAnswer = confirm("Would you like to use uppercase characters?");
  //combined all arrays in order to use them as a string/may remove as code is extra
  charSets = lower + upper + numeric + special;
  //created empty arrays to store users answers in.
  const results = [];
  const results2 = [];
  const results3 = [];
  const results4 = [];
  //created true false if statements in order to allow code to include specific data
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
  //condensed user responses into one array to be used by the for loop to generate a password
  const data = specialAnswer.concat(numericAnswer, lowerAnswer, upperAnswer);
  //use console logs to debug code/ extra code will remove
  console.log(data);
  console.log(charSets);
  //created empty variable to store password in
  var pass = "";
  //made for loop to run function and generate a password using the user responses.
  for (i = 0; i < length; i++) {
    var word = data[Math.floor(data.length * Math.random())];
    //used console log to debug code and verify my info made it this far.
    console.log(word);
    pass += word.charAt(word);
  }
  //use provided code to place generated password inside html.

  document.getElementById("password").placeholder = pass;
  console.log(pass);
  // var pass = document.querySelector("#password");
  alert("Here is your password!   " + pass);
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
