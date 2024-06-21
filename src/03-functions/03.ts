import {StudentType} from "../02-objects/02";


// debugger
// export const sum = (a: number, b: number) => {
    //what function returns:
//     return(a + b);
// }
//
// const result = sum(sum(1,2), sum(1,3));


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}