// Obter uma lista de todos os pokemons
// Função que cria os cards de usuários e retorna os mesmos
const createUserCard = (pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.style = 'background-image:url("./images/pokedex.png"); width: 250px; height:380px; background-size:100%; background-repeat: no-repeat';

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = pokemon.name;
  
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  
    card.appendChild(cardBody);
  
    return card;
  };

   const appendPokemonCard = (card) => {
     const containerPokemons = document.getElementById("containerPokemons")
     containerPokemons.style.display = "flex";
     containerPokemons.style.gap = "20px";
     containerPokemons.style.flexWrap = "wrap";
     containerPokemons.style.margin = "10px 160px";
     containerPokemons.appendChild(card)
  }



fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    .then(response => response.json())
    .then((data) => {
        // Imprime os dados brutos recebidos da PokeAPI
        console.log(data);

        // Itera sobre a lista de resultados e imprime os nomes dos pokémons
        data.results.forEach((pokemon) => {
           
            const card = createUserCard(pokemon)
            appendPokemonCard(card)

          //  console.log(pokemon.name);//
        });
    })
    .catch(error => console.error(error));


    