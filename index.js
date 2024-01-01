// const techten = require('http');

// const server = techten.createServer((request, response) => {
//     const pathName = request.url;
    
//     if(pathName === '/'){
//         response.end("Welcome to Techten Planet's server!")
//     }

//     else if(pathName === '/oliver'){
//         response.end(
//         `
//         Oliver Twist is born in a workhouse and orphaned at birth. After spending early 
//         years in a workhouse, he runs away to London, where he meets a group of juvenile 
//         criminals led by the Artful Dodger. Oliver unwittingly becomes involved in a 
// 				series of misadventures and petty crimes orchestrated by the criminal Fagin.
        
//         Throughout the novel, Oliver's pure and kind nature contrasts with the corruption 
//         and cruelty of the adult world around him. He is taken in by Mr. Brownlow, a 
// 				wealthy and compassionate man, who believes in Oliver's innocence. However, Fagin 
// 				and the sinister Bill Sikes are determined to get Oliver back and involve 
//         him in more serious crimes.
//         `
//         )        
//     }
//     else if (pathName === '/alice'){
//         response.end(
//         `
//         In 1868, 19-year-old girl named Alice Kingsleigh, mourning the 
//         recent loss of her father, is troubled by strange recurring 
//         dreams and the stifling expectations of the society in which she lives. 
//         After receiving an unwanted marriage proposal from Hamish Ascot at his 
//         father's garden party, Alice spots a familiar white rabbit wearing 
//         a waistcoat and carrying a pocket watch. She follows it to a rabbit 
//         hole and accidentally falls in. She shrinks after drinking from a bottle 
//         labeled 'Drink Me' (called a Pishsalver), meaning she cannot reach a key 
//         on a table, and then eats a cake labeled 'Eat Me' (called an Upelkuchen), 
//         transforming into a giantess. After drinking from the bottle again to 
//         fit through a tiny door, she enters the forest of a fantastical place 
//         called Underland. There, she is greeted by the White Rabbit, a Dormouse, 
//         a Dodo, Talking Flowers, and identical twins Tweedledum and Tweedledee, 
//         who all apparently know her.
//         `
//         )
//     }
//     else{
//         response.end("Page Not Found!")
//     }
// })

// server.listen(8000, '127.0.0.1', () => { 
//     console.log("Server is running on port 8000...")
//     }
// )

// const techten = require('express');
// const app = techten();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send("Welcome to Techten Planet's server!");
// });


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const techten = require('express');
// const app = techten();
// const port = 8000;

// app.get('/', (req, res) => {
//   res.send("Welcome to Techten Planet's server!");
// });

// app.get('/oliver', (req, res) => {
//   res.send(`
//     Oliver Twist is born in a workhouse and orphaned at birth. After spending early 
//     years in a workhouse, he runs away to London, where he meets a group of juvenile 
//     criminals led by the Artful Dodger. Oliver unwittingly becomes involved in a 
//     series of misadventures and petty crimes orchestrated by the criminal Fagin.

//     Throughout the novel, Oliver's pure and kind nature contrasts with the corruption 
//     and cruelty of the adult world around him. He is taken in by Mr. Brownlow, a 
//     wealthy and compassionate man, who believes in Oliver's innocence. However, Fagin 
//     and the sinister Bill Sikes are determined to get Oliver back and involve 
//     him in more serious crimes.
//   `);
// });

// app.get('/alice', (req, res) => {
//   res.send(`
//     In 1868, 19-year-old Alice Kingsleigh, mourning the 
//     recent loss of her father, is troubled by strange recurring 
//     dreams and the stifling expectations of the society in which she lives. 
//     After receiving an unwanted marriage proposal from Hamish Ascot at his 
//     father's garden party, Alice spots a familiar white rabbit wearing 
//     a waistcoat and carrying a pocket watch. She follows it to a rabbit 
//     hole and accidentally falls in. She shrinks after drinking from a bottle 
//     labeled 'Drink Me' (called a Pishsalver), meaning she cannot reach a key 
//     on a table, and then eats a cake labeled 'Eat Me' (called an Upelkuchen), 
//     transforming into a giantess. After drinking from the bottle again to 
//     fit through a tiny door, she enters the forest of a fantastical place 
//     called Underland. There, she is greeted by the White Rabbit, a Dormouse, 
//     a Dodo, Talking Flowers, and identical twins Tweedledum and Tweedledee, 
//     who all apparently know her.
//   `);
// });

// app.get('*', (req, res) => {
//   res.send("Page Not Found!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`Welcome to the Student Server`);
});

app.post('/storeStudentData', (req, res) => {
  const { fullName, password, indexNo } = req.body;
  users.push({ fullName, password, indexNo });
  res.status(201).json({ message: 'Data stored successfully on the Student Server!' });
});

app.get('/studentData', (req, res) => {
  res.json(users);
});

app.listen(port, '192.168.43.121', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
