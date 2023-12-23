import { cardPokemon, appendPokemonCard, clearPokemonCards } from "./cardPokemon.js";



async function fethPokemon(pokemonUrl) {
  const APIresponse = await fetch(pokemonUrl);

  const data = await APIresponse.json();

  return data;
}

async function fetchType(typeUrl) {
  const APIresponse = await fetch(typeUrl);
  const data = await APIresponse.json();
  return data;
}


async function listPokemons(urlApi = "https://pokeapi.co/api/v2/pokemon") {
  try {
    // Realizando a requisição à API
    const data = await fetch(urlApi);
    const json = await data.json();
    const pokemons = json.results;

    // Iterando sobre a lista de Pokémon
    for (const pokemon of pokemons) {
      const { id, types, ...pokemonData } = await fethPokemon(pokemon.url);

      // Criando o card para o Pokémon
      const card = await cardPokemon(pokemon, types, id, pokemonData);

      // Adicionando o card ao DOM
      await appendPokemonCard(card);
    }
  } catch (error) {
    console.error(error);
  }
}


export {
  listPokemons,
  fethPokemon,
  fetchType
};
