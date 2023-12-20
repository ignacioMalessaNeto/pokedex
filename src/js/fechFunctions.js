import { cardPokemon, appendPokemonCard } from "./cardPokemon.js";

// Adicionando os listeners
const inputSearch = document.querySelector(".inputSearch");
const selectSearchType = document.getElementById("selectSearchType");
const selectType = document.getElementById("pokemonTypeSelect");

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

async function fetchPokemon(pokemonUrl) {
  const APIresponse = await fetch(pokemonUrl);
  const data = await APIresponse.json();
  return data;
}
// Função para listar todos os Pokémon ou realizar a busca com base nos parâmetros

// Função para realizar a busca por tipo
async function searchPokemonType() {
  const selectedType = selectType.value;

  // Limpando os cards no DOM

  try {
    if (selectedType) {
      const data = await fetchType(
        `https://pokeapi.co/api/v2/type/${selectedType}/?limit=20`
      );
      const pokemons = data.pokemon; // Mostrar apenas os primeiros 20 Pokémon do tipo selecionado

      // Iterando sobre a lista de Pokémon do tipo selecionado
      for (const pokemon of pokemons) {
        const { id, types, ...pokemonData } = await fethPokemon(
          pokemon.pokemon.url
        );
        // const pokemonData = await fethPokemon(pokemon.pokemon.url);

        // Criando o card para o Pokémon
        const card = await cardPokemon(pokemon.pokemon, types, id, pokemonData);

        // Adicionando o card ao DOM
        await appendPokemonCard(card);
      }
    } else {
      // Caso não esteja pesquisando por tipo, chamar a função para listar todos os Pokémon
      listPokemons();
    }
  } catch (error) {
    console.error(error);
  }
}

// Função para limpar os cards no DOM
function clearPokemonCards() {
  const containerPokemons = document.getElementById("containerPokemons");
  containerPokemons.innerHTML = "";
}

async function listPokemons(urlApi = "https://pokeapi.co/api/v2/pokemon") {
  try {
    // Realizando a requisição à API
    const data = await fetch(urlApi);
    const json = await data.json();
    const pokemons = json.results;
    // const pokemons = json.results.slice(0, 20); // Mostrar apenas os primeiros 20 Pokémon

    // Iterando sobre a lista de Pokémon
    for (const pokemon of pokemons) {
      const { id, types, ...pokemonData } = await fethPokemon(pokemon.url);
      // const pokemonData = await fethPokemon(pokemon.url);

      // Criando o card para o Pokémon
      const card = await cardPokemon(pokemon, types, id, pokemonData);

      // Adicionando o card ao DOM
      await appendPokemonCard(card);
    }
  } catch (error) {
    console.error(error);
  }
}

const elementSelectTypes = document.querySelector(".contains2");
const elementInputSearch = document.querySelector(".contains");

// Função para realizar a busca com base nos parâmetros selecionados
async function searchPokemon() {
  const selectedOption = selectSearchType.value;

  console.log(selectElement);

  // Limpando os cards no DOM
  try {
    if (selectedOption === "idName") {
      elementSelectTypes.style.display = "none";
      elementInputSearch.style.display = "flex";

      const pokemon = inputSearch.value.toLowerCase();

      if (pokemon == "") {
        listPokemons();
      }

      const data = await fetchPokemon(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const { id, types } = data;

      // Criando o card para o Pokémon
      const card = await cardPokemon(data, types, id, data);

      // Adicionando o card ao DOM
      await appendPokemonCard(card);
    } else if (selectedOption === "type") {
      elementSelectTypes.style.display = "flex";
      elementInputSearch.style.display = "none";
      searchPokemonType();
    } else if (selectedOption === "") {
      listPokemons();

      elementSelectTypes.style.display = "none";
      elementInputSearch.style.display = "flex";
    } else {
      console.log("Selecione uma opção de busca válida.");
    }
  } catch (error) {
    console.error(error);
  }
}

inputSearch.addEventListener("input", () => {
  clearPokemonCards();
  searchPokemon();
});

selectSearchType.addEventListener("change", () => {
  const selectedOption = selectSearchType.value;

  if (selectedOption === "idName") {
    // Se a opção selecionada for "idName", resetar o valor do selectType e limpar o campo inputSearch
    selectType.value = "";
    inputSearch.value = "";
  }

  searchPokemon();
});

selectType.addEventListener("change", () => {
  inputSearch.value = "";
  clearPokemonCards();
  searchPokemonType();
});

const selectElement = document.querySelector("#selectSearchType");

export {
  listPokemons,
  fethPokemon,
  searchPokemon,
  searchPokemonType,
  inputSearch,
  selectSearchType,
  selectType,
  clearPokemonCards,
};
