import { fethPokemon } from "./fechFunctions.js";

const loadPokemonDetails = async () => {
    const params = new URLSearchParams(document.location.search);
    const pokemonId = params.get("pokemonId");
    const pokemon = await fethPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    const name = document.querySelector('.nome');
    const id = document.querySelector('.id');
    const divAbilities = document.querySelector(".divContains1");
    const divMoves = document.querySelector(".divContains2");

    // Exibir o nome e o ID do Pokémon
    name.textContent = `Nome: ${pokemon.name}`;
    id.textContent = `ID: ${pokemon.id}`;

    // Renderizar habilidades
    const abilitiesArray = pokemon.abilities;
    const ulAbilities = document.createElement("ul");
    ulAbilities.classList.add("ulHabilities")

    abilitiesArray.forEach(({ ability }) => {
        const liAbility = document.createElement("li");
        liAbility.textContent = ability.name;
        ulAbilities.appendChild(liAbility);
    });

    divAbilities.appendChild(ulAbilities);

    // Renderizar movimentos
    const movesArray = pokemon.moves;
    const ulMoves = document.createElement("ul");
    ulMoves.classList.add("ulMoves")

    movesArray.forEach(({ move }) => {
        const liMove = document.createElement("li");
        liMove.textContent = move.name;
        ulMoves.appendChild(liMove);
    });

    const imagePokemon = document.createElement("img");
    imagePokemon.classList.add("imagePokemon");
  
    // Verifica se a imagem principal está disponível
    const mainImage =
      pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"] || pokemon["sprites"]["front_default"];
  
    imagePokemon.src = mainImage || "../../src/images/pokebola.png";
    
    divMoves.appendChild(imagePokemon);

    divMoves.appendChild(ulMoves);
};

loadPokemonDetails();
