import { listPokemons } from "./fechFunctions.js";

const previus = document.getElementById("buttonPrevius");
const next = document.getElementById("buttonNext");
const container = document.getElementById("containerPokemons");

let count = 0;
const url = "https://pokeapi.co/api/v2/pokemon?offset=";

previus.addEventListener("click", () => {
  if (count - 20 >= 0) {
    container.textContent = "";
    count -= 20;
    const urlApi = url + count;
    listPokemons(urlApi);
  }
});

next.addEventListener("click", () => {
  container.textContent = "";
  count += 20;
  const urlApi = url + count;
  listPokemons(urlApi);
});
