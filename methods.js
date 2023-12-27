//map
const numbers = [1, 2, 3, 4, 5];
const addedNum = numbers.map((num) => num + 2);
console.log(addedNum); 

//filter
const nums = [1, 2, 3, 4, 5];
const evenNumbers = nums.filter((e) => e % 2 === 0);
console.log(evenNumbers); 

//reduce
const n = [1, 2, 3, 4, 5];
const sum = n.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); 

//charAt
const str = "Hello, World!";
const charAtIndex = str.charAt(7);
console.log(charAtIndex); 

//toLowerCase
const txt = "hello";
const upperTxt = txt.toUpperCase();
console.log(upperTxt); 

//substring
const lang = "JavaScript";
const subset = lang.substring(0, 4);
console.log(subset);

//date
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
console.log(dayOfMonth); 

//month
const currentDay = new Date();
const month = currentDay.getMonth();
console.log(month); 

//day/mon/yr
const isoDay = new Date();
const output = isoDay.toLocaleDateString()
console.log(output); 

//random
const randomNum = Math.random()
console.log(randomNum); 

//sqrt
const a = 16;
const squareRoot = Math.sqrt(a);
console.log(squareRoot); 

//toFixed
const number = 3.14159;
const formattedNumber = number.toFixed(2);
console.log(formattedNumber); 

//NaN
const value = "Hello";
const nanCheck = isNaN(value);
console.log(nanCheck); 

//bind
const person = {
    name: "Kofi",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  }; 
  
const greetFunction = person.greet;
const boundGreetFunction = greetFunction.bind(person);
boundGreetFunction(); 

//apply
const arr = [1, 2, 3, 4, 5];
const highestNum = Math.max.apply(null, arr)
console.log(highestNum); 

