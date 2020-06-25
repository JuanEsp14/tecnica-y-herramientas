let Book = require("./Book");

class ShoppingCart{
    constructor(){
        this.books = [];
    }
    getBooks(){
        return this.books;
    }
    getTotal(){
        let total = 0;
        this.books.forEach(book =>{
            total += book.getFullPrice();
        })
        return total;
    }
    addBook(book){
        this.books.push(book);
    }
    getBooksCount(){
        return this.books.length;
    }
}

module.exports = ShoppingCart;