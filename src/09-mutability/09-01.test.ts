// noinspection LanguageDetectionInspection

type PersonType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(p: PersonType) {
    p.age++;
}

test('big reference type test', () => {
    const person: PersonType = {
        name: 'Yana',
        age: 35,
        address: {
            title: 'Vilnius'
        }
    }

    increaseAge(person)
    expect(person.age).toBe(36)

//superPerson = ссылка на тот же объект, что и person, поэтому меняя данные в superPerson,
// мы меняем их и в person, так как у нас нет нового объекта, а всего лишь один
    const superPerson = person
    superPerson.age = 40;

    expect(person.age).toBe(40)
})

test('array reference test', () => {
    const users = [
        {
            name: 'Yana',
            age: 35
        },
        {
            name: 'Daniel',
            age: 32
        },
    ]

    const admins = users

    admins[2] = {
        name: 'Lisa',
        age: 0
    }

    expect(users[2].name).toBe('Lisa')
})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount
    adminsCount++

//const запрещает изменения только для примитивных типов данных
    expect(adminsCount).toEqual(101)
    expect(usersCount).toEqual(100)


})

test('reference type object test', () => {
    const address = {
        title: 'Vilnius'
    }

    const person: PersonType = {
        name: 'Yana',
        age: 35,
        address: address
    }


    const person2 = {
        name: 'Daniel',
        age: 32,
        address: person.address
    }

    person2.address.title = 'Berlin'
    expect(person.address.title).toBe('Berlin')
})

test('reference type array test', () => {
    const address = {
        title: 'Vilnius'
    }

    const person: PersonType = {
        name: 'Yana',
        age: 35,
        address: address
    }

    const person2 = {
        name: 'Daniel',
        age: 32,
        address: person.address
    }

    const persons = [person, person2, {name: 'Lisa', age: 2, address: address}]

    const admins = [person, person2]

    admins[0].name = 'Yanni'

    expect(persons[0].name).toBe('Yanni')
    expect(person.name).toBe('Yanni')

})

test('sort array test', () => {
    const letters = ['c', 'a', 'b', 'd', 'e', 'z']
    // letters.sort();
    // expect(letters).toEqual(['a', 'b', 'c', 'd', 'e', 'z'])

    change(letters)
    expect(letters).toEqual(['c', 'a', 'b', 'd', 'e', 'z'])
})

function change(letters: any) {
    letters.sort();
    console.log(letters);
}


