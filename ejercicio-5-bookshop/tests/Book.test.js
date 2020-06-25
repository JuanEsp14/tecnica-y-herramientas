let Book = require("../model/Book.js");
let Review = require("../model/Review");

test("Should add reviews", ()=>{
    hobbit = new Book("El Hobbit", 2000);
    hobbit.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(1, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(3, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(5, "Vestibulum id ligula porta felis euismod semper.");
    hobbit.addReview(4, "Vestibulum id ligula porta felis euismod semper.");
    expect(hobbit.getReviews().length).toBe(5);
})