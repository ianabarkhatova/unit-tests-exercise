import {moveUsertoAnotherHouse, UserWithBooksType, UserWithLaptopType} from './10-01'



test('upgrade house number', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Yana',
        hair: 35,
        address: {
            city: 'Vilnius',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedToAnotherHouseUser = moveUsertoAnotherHouse(user, 99)

    expect(user).not.toBe(movedToAnotherHouseUser)
    expect(user.address).not.toBe(movedToAnotherHouseUser.address)
    expect(user.books).toBe(movedToAnotherHouseUser.books)
    expect(movedToAnotherHouseUser.address.city).toBe(movedToAnotherHouseUser.address.city)
    expect(movedToAnotherHouseUser.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Yana',
        hair: 35,
        address: {
            city: 'Vilnius',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedToAnotherHouseUser = moveUsertoAnotherHouse(user, 99)

    expect(user).not.toBe(movedToAnotherHouseUser)
    expect(user.address).not.toBe(movedToAnotherHouseUser.address)
    expect(user.books).toBe(movedToAnotherHouseUser.books)
    expect(movedToAnotherHouseUser.address.city).toBe(movedToAnotherHouseUser.address.city)
    expect(movedToAnotherHouseUser.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

