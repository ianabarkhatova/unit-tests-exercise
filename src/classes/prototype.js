function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob
}

// правильный подход - закидывать ф-ю hello в прототип
User.prototype.hello = function() {
    console.log(`I am ${this.name} from ${this.site}`)
}

// экземпляры объекта, созданные с помощью конструкции user
const u1 = new User('Yana', "google.com", new Date(1988, 1, 2))
const u2 = new User('Daniel', "google.com", new Date(1992, 1, 2))

