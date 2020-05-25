let Travel = require("./travel.js");
let Car = require("./car.js");
let User = require("./user.js");

let car, driver, travel, passenger1, passenger2;

beforeEach(() => {
    passenger1 = new User("Raúl Quintero");
    passenger2 = new User("Nahuel Lozada");
    driver = new User("Juan Espinoza");
    car = new Car(1, "Peugeot 208", driver);
    travel = new Travel(330, car, "La Plata", "Buenos Aires");
});

test('Test Travel constructor', () => {
    let expectDriver = new User("Juan Espinoza");
    let expectCar = new Car(1, "Peugeot 208", expectDriver);

    expect(travel.getCost()).toBe(330);
    expect(travel.getCar()).toMatchObject(expectCar);
    expect(travel.getFrom()).toBe("La Plata");
    expect(travel.getTo()).toBe("Buenos Aires");
    expect(travel.getPassengers()).toEqual([]);
    expect(travel.getFinalized()).toBe(false);
    expect(travel.getDriver()).toMatchObject(expectDriver);
});

test('Should to add one passenger and reject other', () => {
    let firstAdd = travel.addPassenger(passenger1);
    let secondAdd = travel.addPassenger(passenger2);

    expect(firstAdd).toBe(true);
    expect(secondAdd).toBe(false);
});

test('Should finish the trip and discount the credits', () => {
    travel.addPassenger(passenger1);
    travel.finalizedTravel();

    expect(travel.getFinalized()).toBe(true);
    expect(passenger1.getCredits()).toBe(835);
    expect(driver.getCredits()).toBe(835);
});