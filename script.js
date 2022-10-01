// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var lowercase = "asdfghjklmnbvcxzqwertyuiop";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var allChoice = [];
var specialCharcters = "!" "@" "#" "$" "%" "^" "&" "*" ":" ";";
var passwordLength = document.querySelector("passwordLength");
var random = randomString(10);


// Write password to the #password input
function generatePassword() {
// Gather user input on password requirements
    // input for # of charcters
    // input for special charcters
    // input for lowercase
    // input for uppercase
    // input for numbers


// Validate user input
    // number of characters between 8 and 128
    // What they asnwered true to include

// Decide how to choose what characters to include
// Randomly grab values from each included category
// Assemble password string to be returned

    var passwordLength = parseInt(prompt("How long do you want your password to be? Password must be between 8-128 characters."));
    /*console.log(typeof (passwordLength));*/
    var lowercaseChoice = confirm("Do you want to include lowercase?");
    if(lowercaseChoice){
    allChoice.push (lowercase)
        
    }
    
    var numbers = parseInt(prompt(""))
    if(lowercaseChoice){
        allChoice.push (lowercase)
            
        }

    if(lowercaseChoice){
            allChoice.push (lowercase)
                
            }
    return allChoice

}



function writePassword() {
    var passwordText = generatePassword();

    password.value = passwordText;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);