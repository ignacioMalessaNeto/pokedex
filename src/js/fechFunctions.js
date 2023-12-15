import { cardPokemon, appendPokemonCard } from "./cardPokemon.js";

console.log();

async function listPokemons(urlApi = "https://pokeapi.co/api/v2/pokemon") {
  await fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {

      data.results.forEach(async (pokemon) => {
        const { id } = await fethPokemon(pokemon.url);

        const pokemonOne = await fethPokemon(pokemon.url);

        const card = await cardPokemon(pokemon, id, pokemonOne);

        appendPokemonCard(card);
      });
    })
    .catch((error) => console.error(error));
}

async function fethPokemon(pokemonUrl) {
  const APIresponse = await fetch(pokemonUrl);

  const data = await APIresponse.json();

  return data;
}

async function searchPokemon(pokemon){
  const apiResponseSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await apiResponseSearch.json();
  // console.log(data);
  return data;
}

export { listPokemons, fethPokemon, searchPokemon };
