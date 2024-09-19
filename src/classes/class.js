import React from "react";

class User {
    //делаем name приватным (пример инкапсуляции)
    #name = 'Yanaaaa';

    constructor(name, site, dob) {
        this.name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }

    // getter
    // getName() {
    //     return this.#name
    // }
    get name() {
        return this.#name + '!!!!'
    }

    // setter
    // setName(value) {
    //     this.#name = value
    // }
    set name(value) {
        this.#name = value
    }

    hello() {
        this.counter++
        console.log(`I am ${this.name} from ${this.site}`)
        console.log(this.counter)
    }
}

const u1 = new User('Yana', "google.com", new Date(1988, 1, 2))
const u2 = new User('Daniel', "google.com", new Date(1992, 1, 2))

// u1.hello()
// console.log(u1.hello === u2.hello) //true, т к hello - одна и та же ф-я, которая сидит в прототипе
// console.log(u1.hello === User.prototype.hello) //true

// u1.hello() //I am Yana from google.com 1
// u1.setName('Yana')
// console.log(u1.getName())

// when private, name is called without braces
// console.log(u1.name)

// наследование

class Coder extends User {
    constructor(name, site, dob, tech) {
        // копируем св-ва User
        super(name, site, dob);
        //добавляем новое св-во
        this.tech = tech;
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: a + b`)
    }

    // переопределяем поведение hello
    hello() {
        //выполни поведение hello, от которого мы наследуемся
        super.hello()
        // и добавь новое
        console.log('Go00000')
    }
}

const coder = new Coder('Daniel', "google.com", new Date(1992, 1, 2))
// console.log(coder.code()) //I am Daniel!!!!, here is my code: a + b
const coder1 = new Coder('Daniel', "google.com", new Date(1992, 1, 2), 'js')
// coder1.code()
// coder1.hello()

// полиморфизм

let users = [u1, u2, coder, coder1]
users.forEach(u => u.hello())

// React

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return 'It subscribe'
    }
}

// <ProfilePage age={1}/>
// const comp1 = new ProfilePage({age: 1})
// const jsx = comp1.render()
// jsx => html
// comp1.componentDidMount();

// if(comp1.shouldComponentUpdate()) {
// const newJsx = comp1.render()
// jsx => html
// comp1.componentDidUpdate();
// }










