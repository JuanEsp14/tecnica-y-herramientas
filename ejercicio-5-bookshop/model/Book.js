let Review = require("./Review");
const tax = 0.21;

class Book{
    constructor(name="", price=0){
        this.name = name;
        this.price = price;
        this.reviews = [];
        this.bestSeller = false;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getTax(){
        return 0.21;
    }
    setBestSeller(b){
        this.bestSeller = b;
    }
    addReview(stars, comment){
        let review = new Review(stars, comment)
        this.reviews.push(review);
    }
    getReviews(){
        return this.reviews;
    }
    clearReviews(){
        this.reviews = [];
    }
    getBasePrice(){
        return this.price;
    }
    getCommission(){
        return this.price / 100;
    }
    getPriceWithTax(){
        return this.getBasePrice() + this.getTax();
    }
    getTax(){
        return (this.getBasePrice() * tax);
    }
    getFullPrice(){
        return this.getPriceWithTax() +  this.getCommission();
    }

}

module.exports = Book;

