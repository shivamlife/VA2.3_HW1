console.log('Hello!');

const movie = document.getElementById('movie');
const showMovie = document.getElementById('showMovie');
movie.addEventListener('change', () => {
  const movieValue = movie.value;
  const reccomdation = {
    Comedy: 'PK',
    Action: 'Batman',
    Mystery: 'Drishyam',
  };
  showMovie.textContent = `Reccomended movie is ${reccomdation[movieValue]}`;
});
// Question 2- Select a weather condition and show some activity
const weather = document.getElementById('weather');
const showActivity = document.getElementById('showActivity');
weather.addEventListener('change', () => {
  const weatherValue = weather.value;
  const activity = {
    Sunny: 'Picnic in the park',
    Rainy: 'Movie Day Indoors',
    Snowy: 'Build a Snowman',
  };
  showActivity.textContent = `Outdoor Activity suggestion: ${activity[weatherValue]}`;
});

// Question 3- Select a Langauge and display its greeting
const displayGreetingBtn = document.getElementById('displayGreetingBtn');
const language = document.getElementById('language');
const showGreeting = document.getElementById('showGreeting');
displayGreetingBtn.addEventListener('click', () => {
  const languageValue = language.value;
  const greeting = {
    English: 'Hello !',
    French: 'Bonjour !',
    Spanish: 'Hola !',
  };
  showGreeting.textContent = `Common Greeting is ${greeting[languageValue]}`;
});

//Question 4- Choose a musical intrument and show some fun fact about it
const music = document.getElementById('music');
const displayFunFactBtn = document.getElementById('displayFunFactBtn');
const showFunFact = document.getElementById('showFunFact');
displayFunFactBtn.addEventListener('click', () => {
  const musicValue = music.value;
  const funFact = {
    Piano: 'Piano has 84 keys',
    Guitar: 'It is like guuter',
    Violin: 'Violin is also a gel',
  };
  showFunFact.textContent = `Fun Fact: ${funFact[musicValue]}`;
});

// Question 4- Select a pet and display pet description
const pet = document.getElementById('pet');
const displayPetDescriptionBtn = document.getElementById(
  'displayPetDescriptionBtn'
);
const showPetDescription = document.getElementById('showPetDescription');
displayPetDescriptionBtn.addEventListener('click', () => {
  const petValue = pet.value;
  const description = {
    Dog: 'Dog are faithful',
    Cat: 'Cat are Playful',
    Fish: 'Fish are peaceful',
  };
  showPetDescription.textContent = `Pet Description:${description[petValue]}`;
});
