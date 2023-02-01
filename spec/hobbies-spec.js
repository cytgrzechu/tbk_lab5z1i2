const hobbies = require('../hobbies');
const cars = require('../cars');

describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();
        it("returns 5 hobbies", () => {
            expect(list.length).toEqual(5);
        });
        it("returns 'jogging' as first hobby", () => {
            expect(list[0]).toBe("jogging");
        });
    })
    describe("getCars", () => {
        const list = cars.getCars();
        it("returns 2 cars", () => {
            expect(list.length).toEqual(2);
        });
        it("returns 'Volvo V60 2018' as first hobby", () => {
            expect(list[0]).toBe("Volvo V60 2018");
        });
    })
})