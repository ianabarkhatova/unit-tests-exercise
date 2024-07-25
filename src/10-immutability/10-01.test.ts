import {makeHairStyle, moveUser, UserType, UserWithLaptopType} from './10-01'


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

