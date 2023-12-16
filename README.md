# pokedex
Pokedex que ira ser criada com a pokeAPI junto de 3 colaboradores. 
IGNACIO
FABIANO
CARLA TABORD



// Este código utiliza a PokeAPI para recuperar informações sobre pokémons,
// permitindo a customização da quantidade de resultados através do parâmetro "?limit={valor}".
// Além disso, é possível ajustar a posição inicial dos resultados com o parâmetro "?offset={valor}".
// O código realiza uma requisição usando a função fetch, processa os dados recebidos e imprime
// os nomes dos pokémons no console.

// Exemplo de uso:
// O código abaixo traz os primeiros 50 pokémons a partir do número 20.
// fetch("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=20")
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         data.results.forEach((pokemon) => {
//             console.log(pokemon.name);
//         });
//     })
//     .catch(error => console.error(error));
