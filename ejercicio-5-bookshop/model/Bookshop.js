let Book = require("./Book");

class Bookshop {
    constructor() {
        this.books = [];
        this.purchases = [];
    }
    addPurchase(purchase) {
        this.purchases.push(purchase)
    }
    addBook(book) {
        this.books.push(book)
    }
    getPurchases() {
        return this.purchases
    }

    bestSeller() {
        let booksCount = {};
        let books = {};
        this.purchases.forEach(purchase => {
            purchase.getCart().getBooks().forEach(book => {
                if (book.name in booksCount)
                    booksCount[book.name] = booksCount[book.name] + 1
                else {
                    books[book.name] = book;
                    booksCount[book.name] = 1;
                }
            });
        });
        let name = Object.keys(booksCount).reduce((a, b) => booksCount[a] > booksCount[b] ? a : b);
        return books[name];
    }

    topGrossing() {
        let booksSum = {};
        let books = {};
        this.purchases.forEach(purchase => {
            purchase.getCart().getBooks().forEach(book => {
                if (book.name in books)
                    booksSum[book.name] = booksSum[book.name] + book.getBasePrice()
                else {
                    books[book.name] = book;
                    booksSum[book.name] = book.getBasePrice();
                }
            });
        });
        let name = Object.keys(booksSum).reduce((a, b) => booksSum[a] > booksSum[b] ? a : b);
        return books[name];
    }

    topPurchase() {
        if (this.purchases.length == 0) throw new Error("There are no purchases");
        return this.purchases.reduce(
            (topPurchase, currentPurchase) =>
            topPurchase.getTotal() > currentPurchase.getTotal() ? topPurchase : currentPurchase)
    }

    //Function for separed logic from getBestRatedBook
    getRatedBook(book, processedBooks, averageOfReviews) {
        if (!(book.name in processedBooks)) {
            processedBooks[book.name] = book;
            //Rename variable sum to totalStars
            //Rename variable revs to reviews
            var totalStars = 0;
            var reviews = 0;
            book.getReviews().forEach(review => {
                totalStars += review.getStars();
                reviews++;
            });
            totalStars = totalStars / reviews;
            //Inline variable delete BookName
            averageOfReviews[book.name] = totalStars;
        }
    }

    //Created function for separed logic from getBestRatedBook
    processedPurchases(processedBooks, averageOfReviews) {
        this.purchases.forEach(purchase => {
            purchase.getCart().getBooks().forEach(book => {
                //Extract function
                this.getRatedBook(book, processedBooks, averageOfReviews);
            });
        });
    }

    //Compare witch book has better reviews
    witchIsBetter(bestReview, worstReview, averageOfReviews) {
        return averageOfReviews[bestReview] > averageOfReviews[worstReview] ?
            bestReview :
            worstReview;
    }

    //Rename variable a to bestReview
    //Rename variable b to worstReview
    getBestRatedBookName(averageOfReviews) {
        return Object.keys(averageOfReviews)
            .reduce((bestReview, worstReview) =>
                //Extract function
                this.witchIsBetter(bestReview, worstReview, averageOfReviews)
            );
    }

    getBestRatedBook() {
        //Rename variable b to booksProceced
        //Rename variable r to averageOfReviews
        let processedBooks = {};
        let averageOfReviews = {};

        //Extract function
        this.processedPurchases(processedBooks, averageOfReviews);

        //Extract function
        //Inline variable delete n
        return processedBooks[this.getBestRatedBookName(averageOfReviews)];
    }
}

module.exports = Bookshop;