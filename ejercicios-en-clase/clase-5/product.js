class Product {
    constructor(name = "", price = 0) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getTax() {
        return 0.21;
    }

    getFullPrice() {
        return this.getPrice() * (1 + this.getTax());
    }
}

module.exports = Product;