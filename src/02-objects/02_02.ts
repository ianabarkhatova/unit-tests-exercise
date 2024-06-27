export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number
    builtIn: number
    repaired: boolean
    address: AddressType
}


export type CityType = {
    title: string,
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingType>,
    citizensNumber: number
}

export type governmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION",
    budget: number,
    staffCount: number,
    address: AddressType
}

