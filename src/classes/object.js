// class DeleteUserAction {
//     constructor() {
//         this.type = 'DELETE-USER';
//         this.payload = {
//             userId: userId
//         };
//         m() {};
//     }
// }

// ф-я конструктор запускается тогда, когда мы пишем new и далее название класса (new DeleteUserAction)
// если значение свойства - это ф-я, то оно является методом (m() {})

function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'google.com',
        dateOfBirth: new Date(1988, 1, 2),
        // hello() {
        //     console.log(`I am ${this.name} from ${this.site}`)
        // }
        hello: commonHello
    }
    return user
}

//this - это тот объект, которому принадлежит метод (объект user)

const u1 = userFabric('Yana')
const u2 = userFabric('Daniel')

// console.log(u1)
// console.log(u2)
// console.log(commonHello()) //I am undefined from undefined
// u1.hello() //I am Yana from google.com
// u2.hello() //I am Daniel from google.com







