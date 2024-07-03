import {CityType} from "../02-objects/02_02";
import {changeBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtIn: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street",
                    }
                }
            },

            {
                builtIn: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street",
                    }
                }
            },
            {
                builtIn: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: "Hogwarts street",
                    }
                }
            }
        ],

        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str",
                    }
                }
            },

            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "Souths park str",
                    }
                }
            }
        ],

        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL', () => {

    changeBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    changeBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
    toHireStaff(city.governmentBuildings[1], 20)
    expect(city.governmentBuildings[1].staffCount).toBe(1020)
})

test('Greeting should be correct for city', () => {
    // const Message = createMessage(city);
    expect(createMessage(city)).toBe("Hello New York! All 1000000 people")
})
