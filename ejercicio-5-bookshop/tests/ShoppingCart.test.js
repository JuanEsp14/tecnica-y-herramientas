let Book = require("../model/Book.js");
let ShoppingCart = require("../model/ShoppingCart");

jest.mock("../model/Book");

let hobbit, castillo, cart;

beforeEach(() => {
    hobbit = new Book("El Hobbit", 60000);
    hobbit.getFullPrice.mockReturnValue(2000);
    castillo = new Book("El Hombre en el Castillo", 30000);
    castillo.getFullPrice.mockReturnValue(3000);
    cart = new ShoppingCart();
});

test("Should sum all products prices", ()=>{
    expect(cart.getTotal()).toBe(0);
    cart.addBook(hobbit);
    cart.addBook(castillo);
    expect(cart.getTotal()).toBe(5000);
})

test("Should count products", ()=>{
    cart.addBook(hobbit);
    cart.addBook(castillo);
    cart.addBook(castillo);
    expect(cart.getBooksCount()).toBe(3);
})