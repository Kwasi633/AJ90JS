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

switch(bookChoice) {
    case "Nigeria Treasure":
        console.log(`
    Nigeria is the country with the 
    largest population in Africa
    Balnce: ${check}
    `)
    break;

    case "Ghana History":
        console.log(
    `HISTORY OF GHANA
Ghana, which was formerly known
as Gold Coast is located in the 
western part of Africa. It has a 
population of about 33 million 
citizens...
    `
)
console.log(`Balnce: ${check}`)
    break;
    
    case "Alice In Wonderland":
        console.log(`
            ALICE IN WONDERLAND
In a whimsical world called Wonderland, Alice, a curious girl, 
followed a white rabbit down a rabbit hole. She tumbled into a land of 
talking animals, eccentric characters and bizarre adventures. 
Alongside the Mad Hatter, Cheshire Cat and the Queen of Hearts, 
Alice's journey unfolded in a fantastical and surreal realm, 
forever changing her perception of reality.

Balnce: ${check}
`)
    break;
    
    default:
        console.log(`
Sorry this book is not
available in the library.
        `)
}

const numbers = [2, 5, 4 , 1, 8]
//A function that multiplies the first and last elements in an array
const multiply = (a , b) => a * b
const product = multiply(numbers[0], numbers[numbers.length - 1])

//A function that adds the first 2 elements in an array
const add = (x, y) => x + y
const sum = add(numbers[0], numbers[1])

//A function to find the average of elements in an array
const average = (m) => m / 5
let total = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]

const totalAverage = average(total)

//Create an empty array
let newArr = []

//Store new elements inside empty array
newArr.push(product)
newArr.push(sum)
newArr.push(totalAverage)


newArr.forEach((day) => console.log(day));

const hobby = ['Food', 'Game', 'Tech'];

hobby.forEach((likes) => console.log(likes))


const ages = [32, 10, 33, 12, ,8, 22, 63, 40];

const check = (age) => (age >= 18) 

const checkAdult = ages.filter(check)

console.log(
`
ELIGBLE TO VOTE
${checkAdult}
`
)

const arrayNum = ["Kofi", "John", "Ama"];
arrayNum.map(x => console.log(`
WELCOME ${x}
`))


let arr = [1, 2, 10, 5, 7, 23];

initialValue = 2;

reduceCond = (accumulator, currentValue) => accumulator + currentValue * 2;
res = arr.reduce(reduceCond, initialValue);
console.log(res);


/*

let allNum = [1, 2, 7, 8, 9];
 
let found = allNum.find((element) => element > 4);
 
console.log(found);

let numbers = [10, 1, 3, 4, 9, 8];

const isEven = (element) => {
  return element % 2 == 0;
}

let evenNumber = numbers.find(isEven);
console.log(evenNumber);

const prompt = require('prompt-sync')();

const sales = []

let newSales = prompt("Enter amount sold: ")

sales.push(Number(newSales))

console.log(sales)
*/

const prompt = require('prompt-sync')();

let weekSales = []

let mon = prompt("Enter Sales for Monday: ")
let tue = prompt("Enter Sales for Tuesday: ")
let wed = prompt("Enter Sales for Wednesday: ")
let thu = prompt("Enter Sales for Thursday: ")
let fri = prompt("Enter Sales for Friday: ")

weekSales.push(
    Number(mon),
    Number(tue),
    Number(wed),
    Number(thu),
    Number(fri)
)

initialValue = 0;

reduceCond = (accumulator, currentValue) => accumulator + currentValue;
totalSales = weekSales.reduce(reduceCond, initialValue);
console.log(
   `Total amount of books sold this week: ${totalSales}ghs`
);


