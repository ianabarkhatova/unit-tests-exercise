import {UserWithBooksType} from "../10-immutability-objects/10-01";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type CompanyType = {
    id: number,
    title: string
}

export type withCompaniesType = UserType & {
    companies: Array<CompanyType>
}


export function addNewBookToUser(user: UserWithBooksType & UserWithLaptopType, book: string) {
    return {
        ...user,
        //копируем массив books и добавляем новую книгу book
        books: [...user.books, book]
    }
}

export function updateBook(user: UserWithBooksType & UserWithLaptopType, oldBook: string, newBook: string) {
    return {
        ...user,
        books: user.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(user: UserWithBooksType & UserWithLaptopType, book: string) {
    return {
        ...user,
        books: user.books.filter((b) => b !== book)
    }
}

export function addCompany(user: UserWithLaptopType & withCompaniesType, company: { id: number, title: string }) {
    return {
        ...user,
        companies: [...user.companies, company]
    }
}

export function updateCompany(user: withCompaniesType, id: number, title: string) {
    return {
        ...user,
        //если id комапании совпадает с id того объекта, в который мы хотим внести изменения, мы создаем копию объекта с этой компанией и изменяем title
        companies: user.companies.map(c => c.id === id ? {...c, title: title} : c)
    }
}

export function updateCompanyTitle(companies: { [key: string]: Array<CompanyType> },
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
}
