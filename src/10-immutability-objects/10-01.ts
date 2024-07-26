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

export type UserWithBooksType = UserType & {
    books: string[]
}



export function moveUsertoAnotherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        //создаем копию объекта user
        ...user,
        //создаем копию объекта address и перезатираем city
        address: {...user.address, house: house}
    }
}

