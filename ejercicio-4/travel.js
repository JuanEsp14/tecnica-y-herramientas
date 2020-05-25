class Travel {
    constructor(cost, car, from, to) {
        this.cost = cost;
        this.car = car;
        this.from = from;
        this.to = to;
        this.passengers = [];
        this.finalized = false;
    }

    getCost() {
        return this.cost;
    }

    getCar() {
        return this.car;
    }

    getFrom() {
        return this.from;
    }

    getTo() {
        return this.to;
    }

    getPassengers() {
        return this.passengers;
    }

    getFinalized() {
        return this.finalized;
    }

    getDriver() {
        return this.car.getOwner();
    }

    thereAreCapacity() {
        return this.car.getCapacity() > this.passengers.length;
    }

    addPassenger(passenger) {
        if (this.thereAreCapacity() & !this.finalized) {
            this.passengers.push(passenger);
            return true;
        }
        return false;
    }

    calculateCost() {
        return (this.cost / (this.passengers.length + 1));
    }

    finalizedTravel() {
        if (!this.finalized) {
            let cost = this.calculateCost();
            this.passengers.forEach(passenger => passenger.discountCredits(cost));
            this.getDriver().discountCredits(cost);
            this.finalized = true;
        }
    }
}

module.exports = Travel;