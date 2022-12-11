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
  if (length < 8 || length > 128) {
    alert("Character length less than set parameters.Try Again!");
    return false;
  }
  //set alert to notify users that they must make a choice to recieve a password
  alert("You must select a choice to recieve a password!");
  //created questions to give users control over which characters would be includes.
  var specialAnswer = confirm("Would you like to use special characters?");
  var numericAnswer = confirm("Would you like to use numeric characters?");
  var lowerAnswer = confirm("Would you like to use lowercase characters?");
  var upperAnswer = confirm("Would you like to use uppercase characters?");
  //created empty arrays to store users answers in.
  const results = [];
  const results2 = [];
  const results3 = [];
  const results4 = [];
  //created true false if statements in order to allow code to include specific data
  if (Boolean(specialAnswer === true)) {
    specialAnswer = results.concat(special);
    alert("You have chosen to include Special Characters!");
  } else {
    specialAnswer = [];
  }

  if (Boolean(numericAnswer === true)) {
    numericAnswer = results2.concat(numeric);
    alert("You have chosen to include Numeric Characters!");
  } else {
    numericAnswer = [];
  }
  if (Boolean(lowerAnswer === true)) {
    lowerAnswer = results3.concat(lower);
    alert("You have chosen to include Lowercase Characters!");
  } else {
    lowerAnswer = [];
  }

  if (Boolean(upperAnswer === true)) {
    upperAnswer = results4.concat(upper);
    alert("You have chosen to include Uppercase Characters!");
  } else {
    upperAnswer = [];
  }
  //condensed user responses into one array to be used by the for loop to generate a password
  const data = specialAnswer.concat(numericAnswer, lowerAnswer, upperAnswer);
  //created empty variable to store password in
  var pass = "";
  //made for loop to run function and generate a password using the user responses.
  for (i = 0; i < length; i++) {
    pass += data[Math.floor(data.length * Math.random())];
    //used console log to debug code and verify my info made it this far.
  }
  //use provided code to place generated password inside html.

  document.getElementById("password").placeholder = pass;
  alert("Here is your password!   " + pass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
