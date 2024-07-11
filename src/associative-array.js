let user = {
    name: "Yana",
    age: 12,
    address: {
        city: {
            title: "Vilnius"
        }
    }
}

// console.log(user.address.city.title)
// console.log(user["address"]["city"]["title"])

let city = {}
city.title = "Vilnius"
// console.log(city.title)

city["citizensCount"] = 100
// console.log(city.citizensCount)

let users = ["Yana", "Daniel", "Olivia", "Lisa"]

// console.log(users["map"]((c) => c.toUpperCase()))

let usersObj = {
    '0' : 'Yana',
    '1': 'Daniel',
    '2': 'Olive',
    '3': 'Lisa',
    '4': 'Joshua'
}

// console.log(usersObj['2'])

// console.log(users['0'])

users['0'] = 'Yanni'
// console.log(users[0])

usersObj["table"] = 'brown'

console.log(usersObj.table)
usersObj["hello how are you?"] = "good"

console.log(Object.keys(users))
console.log(Object.values(users))
console.log(usersObj[null] = "Lol")
console.log(usersObj)
usersObj[null] = "Hohoho"
console.log(usersObj)
usersObj[{}] = 'hello'

console.log(usersObj[{name: 'Lissa', toString(){return "blabla"}}] = "value of blala")


