let Purchase = require("../model/Purchase");
let ShoppingCart = require("../model/ShoppingCart");

jest.mock("../model/ShoppingCart");

let cart, purchase;

beforeEach(() => {
    cart = new ShoppingCart();
    purchase = new Purchase(cart);
  });

test("Should create a new purchase", ()=>{
    expect(purchase.getCart()).toBe(cart);
    expect( () => { new Purchase()} ).toThrow();
})

test("Should add shipping cost", ()=>{
    cart.getTotal.mockReturnValue(35000);
    expect(purchase.getTotal()).toBe(35100);
    purchase.getTotal();
    expect(cart.getTotal).toHaveBeenCalledTimes(2);
})