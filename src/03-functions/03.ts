import {StudentType} from "../02-objects/02";
import {CityType, governmentBuildingType, HouseType} from "../02-objects/02_02";


export const sum = (a: number, b: number) => {
    // what function returns:
    return (a + b);
}

export function sum2(a: number, b: number) {
    // what function returns:
    return (a + b);
}

const result = sum(sum(1, 2), sum(1, 3));


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export function StudentLivesIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName;
}

export const changeBudget = (t: governmentBuildingType, num: number) => {
    t.budget += num;
}

export const repairHouse = (h: HouseType) => {
    h.repaired = true;
}

export const toFireStaff = (b: governmentBuildingType, num: number) => {
    b.staffCount -= num;
}

export function toHireStaff(b: governmentBuildingType, num: number) {
    b.staffCount += num;
}

export const createMessage = (props: CityType) => {
    //шаблонные строки
    return `Hello ${props.title}! All ${props.citizensNumber} people`;

}


