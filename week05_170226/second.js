function validateUser(name, email, password) {

    // Name validation
    if (name === "") {
        console.log("Error: Name cannot be empty");
        return;
    }

    // Email validation
    if (!email.includes("@")) {
        console.log("Error: Invalid email");
        return;
    }

    // Password validation
    if (password.length < 6) {
        console.log("Error: Password must be at least 6 characters");
        return;
    }

    console.log("Validation Successful!");
}

// Test cases
validateUser("Riya", "riya@gmail.com", "123456"); // valid
validateUser("", "riya@gmail.com", "123456");     // name error
validateUser("Riya", "riya.gmail.com", "123456"); // email error
validateUser("Riya", "riya@gmail.com", "123");    // password error
