import { cardPokemon, appendPokemonCard } from "./cardPokemon.js";

async function listPokemons(urlApi = "https://pokeapi.co/api/v2/pokemon") {
  const data = await fetch(urlApi);
  const json = await data.json();
  const pokemons = json.results;
  try{
    const data = await fetch(urlApi);
    const json = await data.json();
    const pokemons = json.results;
  // logica de criação do card para funcionamentopor conta de não funcionar <than>;
    for (const pokemon of pokemons) {
      const { id, types } = await fethPokemon(pokemon.url);
  
      const pokemonOne = await fethPokemon(pokemon.url);
  
      // console.log(pokemonOne);
  
      const card = await cardPokemon(pokemon, types, id, pokemonOne);
  
      await appendPokemonCard(card);
    }}
    catch{
      (error) => console.error(error)
    }
}

async function fethPokemon(pokemonUrl) {
  const APIresponse = await fetch(pokemonUrl);

  const data = await APIresponse.json();

  return data;
}

async function searchPokemon(pokemon) {
  const apiResponseSearch = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await apiResponseSearch.json();
  // console.log(data);
  return data;
}

export { listPokemons, fethPokemon, searchPokemon };
