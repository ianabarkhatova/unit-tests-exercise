
export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})


const devs1 = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov"
    },

    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov"
    },

    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    }
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator)

//нам нужен новый масси на основе "people", на основе каждого элемента массива создастся новый элемент
const dev4 = people.map( p => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: p.name.split(" ")[0],
    lastName: p.name.split(" ")[1]
}))

//результат работы map - всегда массив, в данном случае каждым элементом нового массива будет строка
const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome!`)
}
