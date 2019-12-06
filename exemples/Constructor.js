// ES5
function Contact (name, phone, profession, email) {
    this.name = name
    this.phone = phone
    this.profession = profession
    this.email = email

    this.handOutBusinessCard = function () {
        return 'Hello my name is ' + this.name + ", I'm a " + this.profession + ', my phone is ' + this.phone + ' and my email address is ' + this.email
    }
}

const contact = new Contact('Adriano', '999999', 'development', 'adriano@email.com')

contact.handOutBusinessCard() // output: Hello my name is Adriano, I'm a development, my phone is 999999 and my email address is adriano@email.com

// ES6
class Person {
    constructor(name, age, profession) {
        this.name = name
        this.age = age
        this.profession = profession
    }

    whoIAm (){
        return `Hello my name is ${this.name} I'm ${this.age} years old and I'm a ${this.profession}`
    }
}

const adriano = new Person('Adriano', 30, 'developer')

adriano.whoIAm() // output: Hello my name is Adriano I'm 30 years old and I'm a developer