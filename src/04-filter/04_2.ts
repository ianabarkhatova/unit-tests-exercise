import {CityType, governmentBuildingType} from "../02-objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildingType>, number: number) => {
return buildings.filter(b => b.staffCount > number)
}