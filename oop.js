/*
//Defininig a class called Person
class Person {
    constructor(name, place, days) {
        this.name = name;
        this.place = place;
        this.days = days;
    }

    introduce() {
        return `
        Hi, I am ${this.name}, and I come from ${this.place} in West Africa.
        I am participating in the ${this.days} days Javascript Challenge.
        `;
    }
}

const userOne = new Person("Ezra", "Ghana", 90);

console.log(userOne.introduce()); 


console.log("TASKS FOR TODAY:");
for  (let i=0;i< toDo.length;i++){
    console.log(toDo[i]);
}
*/

const prompt = require('prompt-sync')();

const overAllWinner = (input) => {
    let players = {
      kofi: 0,
      ama: 0,
      draw: 0,
    };

    input.forEach((a) => {
        if (a === 1) {
          players.kofi++;
        } else if (a === 2) {
          players.ama++;
        } else if (a === 0) {
          players.draw++;
        }
      }
    )

      if( players.kofi > players.ama){
        console.log(`Kofi is the card game champion with ${players.kofi} wins`)
      }
      else if(players.kofi < players.ama){
        console.log(`Ama is the champion with ${players.ama} wins`)
      }

      return players;
}

const gameScores = []
let answer = "";

while (answer !== "done") {
  answer = prompt("Enter winner of this round or type done to finish: ");

  const num = Number(answer)

  if(answer !== "done"){
    gameScores.push(num)
  }
}

console.log("RESULTS");

for  (let i=0;i< gameScores.length;i++){
    console.log(gameScores[i]);
}

let cardGame = overAllWinner(gameScores)

console.log(cardGame)