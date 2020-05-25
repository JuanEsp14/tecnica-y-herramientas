let User = require("./user.js");
let Car = require("./car.js");
let Travel = require("./travel.js");


let juan = new User("Juan");
let pedro = new User("Pedro");
let fordKa = new Car(4, "Ford Ka", juan);

let viajeLPBuenosAires = new Travel(350, fordKa, "La Plata", "Buenos Aires");
viajeLPBuenosAires.addPassenger(pedro);
viajeLPBuenosAires.finalizedTravel();
viajeLPBuenosAires.finalizedTravel();