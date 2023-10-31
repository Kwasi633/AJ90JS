/*
const prompt = require('prompt-sync')();

console.log(`
    WELCOME TO TECHTEN LIBRARY
`)

const bookChoice = prompt('Search for book: ')

const money = prompt("Enter amount to pay for the book: ")

const pay = (bookPrice, amountPaid) => {
    const balance = amountPaid - bookPrice
    return balance
}

const check = pay(150, money)

const storyBooks = [
    `
    Nigeria is the country with the 
    largest population in Africa
    `,
    `
    HISTORY OF GHANA
Ghana, which was formerly known
as Gold Coast is located in the 
western part of Africa. It has a 
population of about 33 million 
citizens...
    `,

    `ALICE IN WONDERLAND
    In a whimsical world called Wonderland, Alice, a curious girl, 
    followed a white rabbit down a rabbit hole. She tumbled into a land of 
    talking animals, eccentric characters and bizarre adventures. 
    Alongside the Mad Hatter, Cheshire Cat and the Queen of Hearts, 
    Alice's journey unfolded in a fantastical and surreal realm, 
    forever changing her perception of reality.
    `
]

switch(bookChoice) {
    case "Nigeria Treasure":
        console.log(`
        ${storyBooks[0]}
    Balnce: ${check}
    `)
    break;

    case "Ghana History":
        console.log(
    `
    ${storyBooks[1]}
    Balance: ${check}
    `
)
console.log(`Balnce: ${check}`)
    break;
    
    case "Alice In Wonderland":
        console.log(`
        ${storyBooks}
      Balnce: ${check}
`)
    break;
    
    default:
        console.log(`
Sorry this book is not
available in the library.
        `)
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- STARTING EXERCISE ${exercise}`);
  
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Lifting weights repetetion ${rep} `);
    }
  }



const prompt = require('prompt-sync')();

let users = {}

let storeName = prompt("Enter your username: ")

users.userName = storeName

let storePassword = prompt("Enter your password: ")

users.password = storePassword


console.log(users)



const prompt = require('prompt-sync')();


/*
while (answer !== "yes") {
answer = prompt("Do you have an account? ");

if(answer === "no"){
    let users = {}

    let storeName = prompt("Create your username: ")
    
    users.userName = storeName
    
    let storePassword = prompt("Create your password: ")
    
    users.password = storePassword
    
    console.log(
        `
        Welcome to the app ${users.userName}
        `    
        )
}
}

//console.log("Thanks for signing up!");
  
let toDo = []

let answer
while (answer !== "done") {       
        answer = prompt("Add new task: ")
        if(answer !== "done"){
            toDo.push(answer)    
        }
    }
console.log(
    `
    TASKS FOR TODAY
    `    
    )
    for(i = 0; i < toDo.length; i++){
        console.log(toDo[i])
}

const books = {
    title: "Blue Army",
    cost: 250,
    pages: 300,
    author: "Michael Clark",
}

books.characters = {
protagonist: "Mary Jane",
antagonist: "Kai Mitomina"
}



books.colors = ["red", "blue", "yellow"]

console.log(books)


const books = {
    title: "Blue Army",
    cost: 250,
    pages: 300,
    author: "Michael Clark",
}

books.characters = {
protagonist: "Mary Jane",
antagonist: "Kai Mitomina"
}

console.log(
    `
    TechTen BookShop
    Available Books:
    The title of the book is ${books.title}
    It has ${books.pages} pages.
    Some characters in the book are:
    ${books.characters.protagonist}
    ${books.characters.antagonist}
    The book was written by ${books.author}
    The price of the book is ${books.cost}
    `
)


const prompt = require('prompt-sync')();

let users = {}

let storeName = prompt("Create your username: ")

let storePassword = prompt("Enter your password: ")

users.userName = storeName
users.password = storePassword

console.log(`
Welcome to my app ${users.userName}
`)

let map = new Map();

map.set("fruit", "apple");
map.set("color", "red");

console.log(map)
*/

const storyBooks = [
    {
        title: "Alice in Wonderland",
        chapters: 12,
        words: 45000,
        publicationYear: 1865,
        ratings: {
            fiveStars: 350,
            fourStars: 120,
            threeStars: 50
        },
        characters: [
            "Alice",
            "Mad Hatter",
            "Queen of Hearts"
        ]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        chapters: 17,
        words: 76945,
        publicationYear: 1997,
        ratings: {
            fiveStars: 1500,
            fourStars: 500,
            threeStars: 200
        },
        characters: [
            "Harry Potter",
            "Hermione Granger",
            "Ron Weasley"
        ]
    },
    {
        title: "The Blue Army Chronicles",
        chapters: 20,
        words: 89000,
        publicationYear: 2010,
        ratings: {
            fiveStars: 120,
            fourStars: 80,
            threeStars: 30
        },
        characters: [
            "General Blue",
            "Captain Red",
            "Sorcerer Malice"
        ]
    }
];

console.log(storyBooks.map(x => 2023 - x.publicationYear))