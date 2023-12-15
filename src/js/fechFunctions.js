import { cardPokemon, appendPokemonCard } from "./cardPokemon.js";

console.log();

async function listPokemons(urlApi = "https://pokeapi.co/api/v2/pokemon") {
  await fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.results.forEach(async (pokemon) => {
        const { id } = await fethPokemon(pokemon.url);

        const card = cardPokemon(pokemon, id);

        appendPokemonCard(card);
      });
    })
    .catch((error) => console.error(error));
}

async function fethPokemon(pokemonUrl) {
  const APIresponse = await fetch(pokemonUrl);

  const data = await APIresponse.json();

  console.log(data);

  return data;
}

async function searchPokemon(pokemon){
  const apiResponseSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await apiResponseSearch.json();
  return data;
}

export { listPokemons, fethPokemon, searchPokemon };
