/* let userInput = prompt("Enter something:"); */
const prompt = require('prompt-sync')();
users = {};

const storeName = prompt("Create a UserName:")
const storePassword = prompt("Create a Password:")
console.log("");

users = {
    username: storeName,
    storepassword: storePassword
}

console.log(`Welcome to my app ${storeName}`);