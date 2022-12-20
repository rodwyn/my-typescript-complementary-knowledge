import { genericArrowFunction } from "../../generics/generics";
import { Hero, Villain } from "../../interfaces";

console.log(genericArrowFunction(1.2999).toFixed(2));
console.log(genericArrowFunction('Hello').toUpperCase());
console.log(genericArrowFunction(true));
console.log(genericArrowFunction({a:1}));
console.log(genericArrowFunction([1,2,3]).length);

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 123
};

console.log(genericArrowFunction<Hero>(deadpool));
