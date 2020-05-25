let User = require("./user.js");
let user;

beforeEach(() => {
    user = new User("Juan Espinoza");
});

test('Test Usuario constructor', () => {
    expect(user.getName()).toBe("Juan Espinoza");
    expect(user.getCredits()).toBe(1000);
});

test('Should sum credits', () => {
    user.addCredits(50);
    expect(user.getCredits()).toBe(1050);
});

test('Should receive Error exception', () => {
    const err = user.addCredits("invalid");
    expect(err.message).toBe("The quantity: invalid is not a number");
});

test('Should discounit credits', () => {
    user.discountCredits(100);
    expect(user.getCredits()).toBe(900);
});