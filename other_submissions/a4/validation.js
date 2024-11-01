var pwd = "", container = "", msgCmd = ""; // Make the pwd, container, and msgCmd accessible to all functions
let authentic; // Make the authentic variable accessible to all functions

// Validate the username
function validateUsername() {
    var username = document.getElementById("username").value;
    var uNameRe = /^[a-z0-9]{4,12}$/;
    msgCmd = "Please Enter";

    // Check if the username field is empty
    if (username === '') {
        outputError(msgCmd, "Username");
        authentic = false; // Empty username field
    }
    // Check if the username is valid
    else if (!uNameRe.test(username)) {
        outputError(msgCmd, "a valid username");
        authentic = false; // Invalid username
    }
    else authentic = true; // Valid username
    return authentic;
}

// Validate the email
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailPat = /^[\S]+@[\S]+\.(net|com|org|edu)$/;
    msgCmd = "Please Enter";

    // Check if the email field is empty
    if (email === '') {
        outputError(msgCmd, "Email");
        authentic = false; // Empty email field
    }
    // Check if the email is valid
    else if (!emailPat.test(email)) {
        outputError(msgCmd, "a valid email");
        authentic = false; // Invalid email address
    }
    else authentic = true; // Valid email address
    return authentic;
}

// Validate the phone number
function validatePhoneNum() {
    var phoneNum = document.getElementById("phone").value;
    var pNumRe = /^\(\d{3}\)-\d{3}-\d{4}$/;
    msgCmd = "Please Enter";
    
    // Check if the phone number field is empty
    if (phoneNum === "") {
        outputError(msgCmd, "Phone Number");
        authentic = false; // Empty phone number field
    }
    // Check if the phone number is valid
    else if (!pNumRe.test(phoneNum)) {
        outputError(msgCmd, "a valid phone number");
        authentic = false; // Invalid phone number
    }
    else authentic = true; // Valid phone number
    return authentic;
}

// Validate the password
function validatePassword() {
    pwd = document.getElementById("pwd").value;
    var pwdRe = /^(?=.[a-zA-Z0-9_]).{9,}$/;
    msgCmd = "Please Enter";

    // Check if the password field is empty
    if (pwd === '') {
        outputError(msgCmd, "Password");
        authentic = false; // Empty password field
    }
    // Check if the password is valid
    else if (!pwdRe.test(pwd)) {
        outputError(msgCmd, "a valid password");
        authentic = false; // Invalid password
    }
    else authentic = true; // Valid password
    return authentic;
}

// Validate the confirm password
function validateConfirmPassword() {
    pwd = document.getElementById("pwd").value;
    var confirmPwd = document.getElementById("confirmPwd").value;
    
    // Check if the confirm password field matches the password field
    if (pwd !== confirmPwd) {
        alert("passwords do not match");
        authentic = false; // Passwords do not match
    }
    else authentic = true; // Passwords match
    return authentic;
}

// Validate the gender
function validateGender() {
    var gender = document.querySelector('input[name="gender"]:checked');
    msgCmd = "Please Select";

    // Check if a gender is selected
    if (!gender) {
        outputError(msgCmd, "Gender");
        authentic = false; // A gender is not selected
    }
    else authentic = true; // Selected gender
    return authentic;
}

// Validate the age group
function validateAgeGroup() {
    var ageGroup = document.getElementById("age").value;
    msgCmd = "Please Select";

    // Check if the age group's selection is empty
    if (ageGroup === '') {
        outputError(msgCmd, "Age Group");
        authentic = false; // Empty age group selection
    }
    else authentic = true; // Age group selected
    return authentic;
}

// Output error messages
function outputError(msg, fieldName) {
    let style = document.createElement("style"); // Create a style element

    // Set the style of the error message
    style.innerHTML = `
        .empElem {
            color: red;
            font-weight: bold;
        }
        
        .invalidCred {
            color: orange;
            font-weight: bold;
        }
    `;

    document.head.appendChild(style); // Append the style to the head of the form document
    container = document.getElementById("container");
    var div = document.createElement("div"); // Create a div element

    // Set the div
    if (fieldName.includes("a valid")) div.innerHTML = "<p>" + msg + " <span class='invalidCred'>" + fieldName + "</span></p>";
    else div.innerHTML = "<p>" + msg + " <span class='empElem'>" + fieldName + "</span></p>";
    container.appendChild(div); // Append the div to the container
}

// Clear any warnings or errors
function removeContents() {
    container = document.getElementById("container");
    if (container) container.innerHTML = ''; // Empty the container
}

// Validate the form after submission
function validateSubmission() {
    removeContents(); // Replace previous errors
    authentic = true; // Set the authentication to true

    // Validate all fields using a bitwise AND assignment op
    authentic &= validateUsername();
    authentic &= validateEmail();
    authentic &= validatePhoneNum();
    authentic &= validatePassword();
    authentic &= validateConfirmPassword();
    authentic &= validateGender();
    authentic &= validateAgeGroup();
    return authentic;
}