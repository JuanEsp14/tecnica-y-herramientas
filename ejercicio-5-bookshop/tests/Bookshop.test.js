let Bookshop = require("../model/Bookshop");
let ShoppingCart = require("../model/ShoppingCart");
let Purchase = require("../model/Purchase");
let Book = require("../model/Book");

let hobbit, castillo, aleph;
let cart1, cart2, cart3;
let purchase1, purchase2, purchase3;
let empty, shop;

beforeEach(() => {
    hobbit = new Book("El Hobbit", 2000);
    hobbit.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(1, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(3, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(2, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    castillo = new Book("El Hombre en el Castillo", 1300);
    castillo.addReview(3, "Vestibulum id ligula porta felis euismod semper.");
    castillo.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    castillo.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    aleph = new Book("El Aleph", 2200);
    aleph.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    aleph.addReview(2, "Vestibulum id ligula porta felis euismod semper.");
    aleph.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    comunidadDelAnillo = new Book("El señor de los anillos: la comunidad del anillo", 2000);
    comunidadDelAnillo.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    comunidadDelAnillo.addReview(3, "Vestibulum id ligula porta felis euismod semper.");
    comunidadDelAnillo.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    comunidadDelAnillo.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    comunidadDelAnillo.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    lasDostorres = new Book("El señor de los anillos: las dos torres", 2000);
    lasDostorres.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    lasDostorres.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    lasDostorres.addReview(2, "Vestibulum id ligula porta felis euismod semper.");
    lasDostorres.addReview(3, "Vestibulum id ligula porta felis euismod semper.");
    lasDostorres.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    elRetornoDelRey = new Book("El señor de los anillos: el retorno del rey", 2000);
    elRetornoDelRey.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    elRetornoDelRey.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    elRetornoDelRey.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    elRetornoDelRey.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    elRetornoDelRey.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    cart1 = new ShoppingCart();
    cart1.addBook(hobbit);
    cart1.addBook(castillo);
    cart2 = new ShoppingCart();
    cart2.addBook(aleph);
    cart2.addBook(aleph);
    cart3 = new ShoppingCart();
    cart3.addBook(aleph);
    cart3.addBook(castillo);
    cart4 = new ShoppingCart();
    cart4.addBook(hobbit);
    cart4.addBook(castillo);
    cart4.addBook(aleph);
    cart4.addBook(comunidadDelAnillo);
    cart4.addBook(lasDostorres);
    cart4.addBook(elRetornoDelRey);
    cart5 = new ShoppingCart();
    cart5.addBook(hobbit);
    purchase1 = new Purchase(cart1);
    purchase2 = new Purchase(cart2);
    purchase3 = new Purchase(cart3);
    purchase4 = new Purchase(cart4);
    purchase5 = new Purchase(cart5);
    shop = new Bookshop();
    shop.addPurchase(purchase1);
    shop.addPurchase(purchase2);
    shop.addPurchase(purchase3);
    equalsShop = new Bookshop();
    equalsShop.addPurchase(purchase4);
    equalsShop.addPurchase(purchase4);
    uniqueBookShop = new Bookshop();
    uniqueBookShop.addPurchase(purchase5);
    totalShop = new Bookshop();
    totalShop.addPurchase(purchase1);
    totalShop.addPurchase(purchase2);
    totalShop.addPurchase(purchase3);
    totalShop.addPurchase(purchase4);
    totalShop.addPurchase(purchase5);
    empty = new Bookshop();
});

test("Should return the most expensive purchase", () => {
    expect(() => { empty.topPurchase() }).toThrow("There are no purchases");
    expect(shop.topPurchase()).toBe(purchase2);
})

test("Should return getBestRatedBook", () => {
    expect(shop.getBestRatedBook()).toBe(castillo);
    expect(equalsShop.getBestRatedBook()).toBe(elRetornoDelRey);
    expect(uniqueBookShop.getBestRatedBook()).toBe(hobbit);
    expect(totalShop.getBestRatedBook()).toBe(elRetornoDelRey);
})

test("Should return top grossing", () => {
    expect(shop.topGrossing()).toBe(aleph);
})

test("Should return best seller", () => {
    expect(shop.bestSeller()).toBe(aleph);
})