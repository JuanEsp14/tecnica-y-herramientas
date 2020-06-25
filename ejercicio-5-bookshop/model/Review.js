class Review{
    constructor(stars,comment=""){
        this.stars = stars;
        this.comment = comment;
    }
    getStars(){
        return this.stars;
    }

    getComment(){
        return this.comment;
    }
}

module.exports = Review;