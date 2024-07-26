import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from './10-01'


test('reference type test', () => {

    let user: UserType = {
        name: 'Yana',
        hair: 35,
        address: {
            title: 'Vilnius'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(17.5)
    expect(user.hair).toBe(35)
    expect(awesomeUser.address).toBe(user.address)

    //toBe - как оператор двойного равенства
})

test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Yana',
        hair: 35,
        address: {
            city: 'Vilnius',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Amsterdam')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Amsterdam')
    //laptop должен быть тем же самым объектом
    expect(movedUser.laptop).toBe(user.laptop)
    //toBe - как оператор двойного равенства
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Yana',
        hair: 35,
        address: {
            city: 'Vilnius',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(upgradedUser.address.city).toBe(upgradedUser.address.city)
    expect(upgradedUser.laptop).not.toBe(user.laptop)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})

