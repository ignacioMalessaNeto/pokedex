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
    scrollToTop(); 
  }
});

next.addEventListener("click", () => {
  document.offSetTop
  container.textContent = "";
  count += 20;
  const urlApi = url + count;
  listPokemons(urlApi);
  scrollToTop(); 
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Faz a rolagem ser suave
  });
}
