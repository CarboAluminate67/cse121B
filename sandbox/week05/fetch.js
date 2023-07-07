// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;


async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}


function doStuff(data) {
    const output = document.getElementById("output");
    results = data;
    const newHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Default Sprite">
    <h1>Name: ${results.name}</h1>
    <h3>Poke ID: ${results.id}</h3>`
    output.innerHTML = newHTML;
    console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);


let resultsList = null
const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url)
{
    const response = await fetch(url);
    if(response.ok)
    {
        const data = await response.json();
        doStuffList(data);
    }
}

function doStuffList(data)
{
    const outputList = document.getElementById("outputList");
    console.log("List:", data);
    const pokeList = data.results;
    pokeList.forEach( (pokemon) => outputList.innerHTML += `<li>${pokemon.name}</li>`)
}

getPokemonList(urlList);