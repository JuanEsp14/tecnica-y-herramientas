let Product = require("./product.js")
    //Los test tienen dos parámetros, el primero indica qué debe suceder
    //y el segundo es la función del test que se quiere analizar
    // jest es una librería para poder usar test dentro de de una manera más amigable
    // ya que es parecido a JUnit
    //Se corre con npm test
let ShoppingCart = require("./shopping-cart.js");

let laptop, phone, cart;

beforeEach(() => {
    laptop = new Product("Laptop", 60000);
    phone = new Product("Smartphone", 30000);
    cart = new ShoppingCart();
});

test("Should sum all products pricess", () => {
    cart.addProduct(laptop);
    cart.addProduct(phone);
    expect(cart.getTotal()).toBe(108900);
});