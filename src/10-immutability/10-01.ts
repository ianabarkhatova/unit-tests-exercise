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
        //создаем копию объекта user
        ...user,
        //создаем копию объекта address и перезатираем city
        address: {...user.address, city: city}
    }
}

export function upgradeUserLaptop(user: UserWithLaptopType, laptop: string) {
    return {
        ...user,
        laptop: {...user.laptop, title: 'Macbook'}
    }
}
