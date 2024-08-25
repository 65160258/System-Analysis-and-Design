import superheroes from 'superheroes';

// Generate a random index to select a superhero name
const randomIndex = Math.floor(Math.random() * superheroes.length);
const name = superheroes[randomIndex];

console.log(name);
