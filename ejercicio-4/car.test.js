let Car = require("./car.js");
let User = require("./user.js");

let car;

beforeEach(() => {
    let user = new User("Juan Espinoza");
    car = new Car(4, "Peugeot 208", user);
});

test('Test Car constructor', () => {
    expect(car.getCapacity()).toBe(4);
    expect(car.getName()).toBe("Peugeot 208");
    let userExpect = new User("Juan Espinoza");
    expect(car.getOwner()).toMatchObject(userExpect);
});