import { getPokemon } from "./generics/getPokemon";


getPokemon(800)
.then(
  response => {
    console.log(response);
  }
).catch(
  error => {
    console.log(error);
  }
);