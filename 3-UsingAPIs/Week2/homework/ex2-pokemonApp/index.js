'use strict';

'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:
async function fetchData(url) {
  try {
    const response = await fetch(url);

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.
`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.
Use async/await and try/catch to handle promises.
Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(/* TODO parameter(s) go here */) {
  // TODO complete this function
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

function fetchAndPopulatePokemons(/* TODO parameter(s) go here */) {
  // TODO complete this function
async function fetchAndPopulatePokemons(url) {
  const selectElement = document.querySelector('select');

  try {
    const data = await fetchData(url);

    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.url;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

function fetchImage(/* TODO parameter(s) go here */) {
  // TODO complete this function
async function fetchImage(url) {
  const imgElement = document.querySelector('img');

  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
  } catch (error) {
    console.error('Error:', error);
  }
}

function main() {
  // TODO complete this function
  const selectElement = document.querySelector('select');

  selectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    if (selectedOption) {
      fetchImage(selectedOption);
    }
  });

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  fetchAndPopulatePokemons(url);
}

window.addEventListener('load', main);