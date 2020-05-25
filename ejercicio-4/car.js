class Car {
    constructor(capacity, name, owner) {
        this.capacity = capacity;
        this.name = name;
        this.owner = owner;
    }

    getName() {
        return this.name;
    }

    getCapacity() {
        return this.capacity;
    }

    getOwner() {
        return this.owner;
    }
}

module.exports = Car;