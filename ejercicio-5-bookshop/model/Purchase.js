let ShoppingCart = require("./ShoppingCart");

class Purchase{
    constructor(cart){
        if (typeof(cart) == "undefined") {
            throw("Una compra necesita un carrito");
        }
        this.cart = cart;
    }

    getCart(){
        return this.cart;
    }

    getTotal(){
        return this.getCart().getTotal() + this.getShippingCost();
    }

    getShippingCost(){
        return 100;
    }
}

module.exports = Purchase;