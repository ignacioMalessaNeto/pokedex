import {  fethPokemon, listPokemons, fetchType } from "./fechFunctions.js";
import { cardPokemon, appendPokemonCard, clearPokemonCards } from "./cardPokemon.js";
listPokemons();

// Adicionando os listeners
const inputSearch = document.querySelector(".inputSearch");
const selectSearchType = document.getElementById("selectSearchType");
const selectType = document.getElementById("pokemonTypeSelect");
const elementSelectTypes = document.querySelector(".contains2");
const elementInputSearch = document.querySelector(".contains");


function verificaContemApenasNumeros(valor) {
  const regex = /^\d+$/; // Expressão regular para verificar se a string contém apenas números

  return regex.test(valor); // Retorna true se a string contém apenas números, caso contrário, retorna false
}


async function searchPokemon() {
  const selectedOption = selectSearchType.value;

  try {
    if (selectedOption === "idName") {
      clearPokemonCards();

      elementSelectTypes.style.display = "none";
      elementInputSearch.style.display = "flex";



      const searchTerm = inputSearch.value.trim().toLowerCase();

      if (searchTerm === "") {
        listPokemons();
      }
      else if (verificaContemApenasNumeros(searchTerm)) {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
        );
        const jsonData = await data.json();

        const { id, types, ...pokemonData } = jsonData;

        const card = await cardPokemon(
          jsonData,
          types,
          id,
          pokemonData
        );

        // Adicionando o card ao DOM
        await appendPokemonCard(card);

      }
      else {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
        );
      
        if (!response.ok) {
          if (response.status === 404) {
            let mensagemErro = document.createElement("p");
            mensagemErro.classList.add("pError");
            mensagemErro.textContent = "Pokémon not found by search :(";
      
            let main = document.querySelector("main");
            main.appendChild(mensagemErro);
          } else {
            throw new Error('Failed to fetch Pokémon');
          }
        } else {
          // Remover mensagem de erro, se existir
          const existingErrorMessage = document.querySelector(".pError");
          if (existingErrorMessage) {
            existingErrorMessage.remove();
          }
        
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
          );
        
          if (!response.ok) {
            if (response.status === 404) {
              let mensagemErro = document.createElement("p");
              mensagemErro.classList.add("pError");
              mensagemErro.textContent = "Pokémon not found by search :(";
        
              let main = document.querySelector("main");
              main.appendChild(mensagemErro);
            } else {
              throw new Error('Failed to fetch Pokémon');
            }
          } else {
            const jsonData = await response.json();
        
            clearPokemonCards();
        
            const { types, id } = jsonData;
        
            // Criando o card para o Pokémon
            const card = await cardPokemon(
              jsonData,
              types,
              id,
              jsonData
            );
        
            // Adicionando o card ao DOM
            await appendPokemonCard(card);
          }
        }
      }
    }
    else if (selectedOption === "type") {
      elementSelectTypes.style.display = "flex";
      elementInputSearch.style.display = "none";
      searchPokemonType();
    } else if (selectedOption === "") {
      listPokemons();

      elementSelectTypes.style.display = "none";
      elementInputSearch.style.display = "none";
    } else {
      console.log("Selecione uma opção de busca válida.");
    }
  } catch (error) {
    console.error(error);
  }
}


// Função para listar todos os Pokémon ou realizar a busca com base nos parâmetros

// Função para realizar a busca por tipo
async function searchPokemonType() {
  const selectedType = selectType.value;

  // Limpando os cards no DOM

  try {
    if (selectedType) {
      const data = await fetchType(
        `https://pokeapi.co/api/v2/type/${selectedType}`
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




let debounceTimer;

async function debounceSearchPokemon() {
  // Limpar o timer anterior, se existir
  clearTimeout(debounceTimer);

  // Configurar um novo timer
  debounceTimer = setTimeout(() => {
    searchPokemon();
  }, 500); // Tempo de atraso em milissegundos (ajuste conforme necessário)
}
selectSearchType.addEventListener("change", () => {
  const selectedOption = selectSearchType.value;

  if (selectedOption === "idName") {
    // Se a opção selecionada for "idName", resetar o valor do selectType e limpar o campo inputSearch
    selectType.value = "";
    inputSearch.value = "";
  }

  searchPokemon();
});


inputSearch.addEventListener("input", () => {
  clearPokemonCards();
  debounceSearchPokemon();
});


selectType.addEventListener("change", () => {
  inputSearch.value = "";
  clearPokemonCards();
  searchPokemonType();
});  
