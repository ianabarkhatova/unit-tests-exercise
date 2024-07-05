type LessonType = {
    title: string
}

type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType

beforeEach(() => {
    props = {
        name: "Yana",
        age: 35,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        address: {
            street: {
                title: "Vytauto"
            }
        }
    }
})

//destructuring strings
test('', () => {

    const {name, age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(35)
    expect(lessons.length).toBe(3)
    expect(name).toBe("Yana")
    expect(title).toBe("Vytauto")
})

//destructuring arrays
test('check destructuring', () => {
    // const l1 = props.lessons[0];
    // const l2 = props.lessons[1];

    const [l1, l2] = props.lessons
    // const [l11] = props.lessons - только первый элемент
    // const [,l2] = = props.lessons - только второй элемент
    // const [,,l3] = = props.lessons - только третий элемент
    // const [l1, ...restLessons] = props.lessons - все остальные эдементы сложились в restLessons
    // const [, l2, ...restLessons] = props.lessons - пропустить первый, взять второй...

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(l1).toStrictEqual({title: "1"})


})