// Obter uma lista de todos os pokemons
// Função que cria os cards de usuários e retorna os mesmos
const createUserCard = (pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const imagePokemon = document.createElement("img"); 

    imagePokemon.src = "../../src/images/pokedex.png"

    imagePokemon.classList.add("imagePokedex");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const gifPokemon = document.createElement("img");

    gifPokemon.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/showdown/25.gif?raw=true`;

    gifPokemon.classList.add("gifPokemon");
    
    const cardTitle = document.createElement("h1");
    
    const pokemonName = document.createElement("span"); 

    const pokemonNumber = document.createElement("span"); 
    
    pokemonName.classList.add("card-title");

    cardTitle.append(pokemonName);
    cardTitle.append(pokemonNumber);

    pokemonName.textContent = pokemon.name;

    pokemonNumber.textContent = pokemon.id;
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(gifPokemon);
    cardBody.appendChild(imagePokemon);
  
    card.appendChild(cardBody);
  
    return card;
  };

   const appendPokemonCard = (card) => {
     const containerPokemons = document.getElementById("containerPokemons")
     containerPokemons.appendChild(card)
  }



async function fethPokemons(){
await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    .then(response => response.json())
    .then((data) => {
        // Imprime os dados brutos recebidos da PokeAPI
        console.log(data);

        // Itera sobre a lista de resultados e imprime os nomes dos pokémons
        data.results.forEach((pokemon) => {
           
            const card = createUserCard(pokemon)
            
            appendPokemonCard(card)

            console.log(pokemon);
        });
    })
    .catch(error => console.error(error));

}

fethPokemons();