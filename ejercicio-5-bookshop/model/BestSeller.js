let Book = require("./Book");

class BestSeller extends Book{
    getBasePrice(){
        return this.price * 1.1;
    }
    getCommission(){
        return this.price / 50;
    }
}

module.exports = Book;
