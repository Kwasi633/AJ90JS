const prompt = require('prompt-sync')();

console.log(
  `Welcome to Ezy Cinemas!
  
  `)
const movieTitle = prompt("Enter title of movie you want to watch: ");

const apiKey = 'db371c47';

console.log("Loading movie data...")

fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  