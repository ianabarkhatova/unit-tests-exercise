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

export function makeHairStyle(user: UserType, power: number) {
    const userCopy = {
        //создаем копию user:
        ...user,
        //изменяем свойство hair у копии:
        hair: user.hair / power
    }

    // userCopy.hair = userCopy.hair / power
    return userCopy
}

export function moveUser(user: UserWithLaptopType, city: string) {
    return {
        ...user,
        address: {...user.address, city: city}
    }
}
