const prompt = require('prompt-sync')();

const users = {
    _username: "",
    _password: "",

    // Getter for username
    get username() {
        return this._username;
    },

    // Setter for username with data validation
    set username(value) {
        if (typeof value === "string") {
            this._username = value;
        } else {
            console.log("Invalid username. Please enter a valid string.");
        }
    },

    // Getter for password
    get password() {
        return this._password;
    },

    // Setter for password with data validation
    set password(value) {
        if (typeof value === "string" && value.length >= 8) {
            this._password = value;
        } else {
            console.log("Invalid password. Please enter a valid string with at least 8 characters.");
        }
    }
};

// Prompt user for username and password
const storeName = prompt("Enter your username:");
const storePassword = prompt("Create a password:");

// Set username and password using the setters
users.username = storeName;
users.password = storePassword;

// Check if the entered details are correct before displaying the welcome message
if (users.username && users.password) {
    // Display a welcome message
    console.log(`Signup Success!`);
} else {
    console.log("Incorrect details. Please enter valid username and password to signup!");
}
