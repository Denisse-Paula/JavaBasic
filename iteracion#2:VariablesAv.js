//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
let age=25;
//1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
 //Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'   
 console.log(`Soy ${FirstName} ${lastName}, tengo ${age} años y me gustan los lobos`);
 //1.3 dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.

const toy1={name:"Buss myYear", price:19};
const toy2={name:"Rallo mcking", price:29};
const precio=toy1["price"]+ toy2["price"];

//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice

let globalBasePrice=25000;
let basePriceBMW=50000;
let basePriceChevrolet=70000;
const finalPriceCar1=(basePriceBMW+globalBasePrice);
const finalPriceCar2=(basePriceChevrolet+globalBasePrice);