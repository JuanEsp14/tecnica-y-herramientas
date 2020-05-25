class User {
    constructor(name) {
        this.credits = 1000;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getCredits() {
        return this.credits;
    }

    addCredits(quantity) {
        if (!Number(quantity)) {
            return new Error(`The quantity: ${quantity} is not a number`);
        } else return this.credits = this.credits + quantity;
    }

    discountCredits(quantity) {
        this.credits = this.credits - quantity;
    }
}

module.exports = User;