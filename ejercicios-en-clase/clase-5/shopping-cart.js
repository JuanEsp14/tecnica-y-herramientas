let Product = require("./product.js")

class ShoppinCart {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    getTotal() {
        let total = 0;
        this.products.forEach(product => total += product.getFullPrice());
        return total;
    }

    addProduct(product) {
        this.products.push(product);
    }
}

module.exports = ShoppinCart;