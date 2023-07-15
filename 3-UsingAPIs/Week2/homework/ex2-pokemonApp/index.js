'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

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
const body = document.body
// creating the button
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const btn=document.createElement('button')
  btn.textContent="Get Pokemons"
  btn.setAttribute('type', 'button');
  btn.addEventListener('click',()=>fetchAndPopulatePokemons(url))
  body.appendChild(btn)
// create select 

const select=document.createElement('select')
select.id='pokemonSelect'
body.appendChild(select)

// create img
const imag=document.createElement('img')
imag.alt='pokemon'
body.appendChild(imag)

  const selectElement = document.querySelector('select');

  selectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    if (selectedOption) {
      fetchImage(selectedOption);
    }
  });
}

window.addEventListener('load', main);