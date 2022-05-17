//1.1 Consigue el valor "HULK" del array y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.shift();
//1.2 Cambia el primer elemento de avengers a "IRONMAN".
avengers.unshift("IRONMAN");
//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
alert(avengers.length);
//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
console.log(rickAndMortyCharacters.push("Morty","Summer"));
let character=rickAndMortyCharacters[4];
console.log(character);
//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
console.log(rickAndMortyCharacters.push("Lapiz Lopez"));
console.log(rickAndMortyCharacters.pop());
console.log(rickAndMortyCharacters.slice(0,5));
//1.6 Elimina el segundo elemento del array y muestra el array por consola.
console.log(rickAndMortyCharacters.push("Lapiz Lopez"));
console.log(rickAndMortyCharacters.splice(2,1));
console.log(rickAndMortyCharacters);
