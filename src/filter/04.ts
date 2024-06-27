const ages = [18, 20, 22, 1, 100, 90, 14]

type CourseType = {
    title: string,
    price: number
}

// < 160
export const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = [
    {
        title: "CSS",
        price: 110
    },

    {
        title: "React",
        price: 150
    },
]