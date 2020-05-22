//Los test tienen dos parámetros, el primero indica qué debe suceder
//y el segundo es la función del test que se quiere analizar
// jest es una librería para poder usar test dentro de de una manera más amigable
// ya que es parecido a JUnit
//Se corre con npm test
let Product = require("./product.js")

test('Should return the products full price', () => {
    let laptop = new Product("Laptop", 60000);
    expect(laptop.getFullPrice()).toBe(72600);
})