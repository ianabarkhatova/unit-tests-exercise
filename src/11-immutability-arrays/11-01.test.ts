import {
    addCompany,
    addNewBookToUser, removeBook, updateBook, updateCompany, updateCompanyTitle,
    UserWithLaptopType, withCompaniesType
} from "./11-01";
import {UserWithBooksType} from "../10-immutability-objects/10-01";



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

    const userWithNewBooks  = addNewBookToUser(user, 'ts')

    expect(user).not.toBe(userWithNewBooks)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[4]).toBe('ts')
    // expect(userWithNewBooks.books[5]).toBe('rest API')
})

test('update js to ts', () => {

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

    const userWithNewBooks  = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userWithNewBooks)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[2]).toBe('ts')
})

test('remove js book', () => {

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

    const userWithNewBooks  = removeBook(user, 'js')

    expect(user).not.toBe(userWithNewBooks)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[2]).toBe('react')
})

test('add company', () => {

    let user: UserWithLaptopType & withCompaniesType = {
        name: 'Yana',
        hair: 35,
        address: {
            city: 'Vilnius',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}]
    }

    const userWithNewCompany  = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userWithNewCompany)
    expect(userWithNewCompany.companies[2].title).toBe('Google')
})

test('update company', () => {

    let user: UserWithLaptopType & withCompaniesType = {
        name: 'Yana',
        hair: 35,
        address: {
            city: 'Vilnius',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epan'}, {id: 2, title: 'It-Incubator'}]
    }

    const userWithNewCompany  = updateCompany(user, 1, 'Epam')

    expect(user).not.toBe(userWithNewCompany)
    expect(userWithNewCompany.companies[0].title).toBe('Epam')
})

test('update company 2', () => {

    let companies = {
        'Yana': [{id: 1, title: 'Epan'}, {id: 2, title: 'It-Incubator'}],
        'Daniel': [{id: 1, title: 'Luminor'}, {id: 2, title: 'Danske Bank'}]
    }

const copy = updateCompanyTitle(companies, 'Yana', 1, 'Epam')

    expect(copy['Yana']).not.toBe(companies['Yana'])
    expect(copy['Daniel']).toBe(companies['Daniel'])
    expect(copy['Yana'][0].title).toBe('Epam')




})