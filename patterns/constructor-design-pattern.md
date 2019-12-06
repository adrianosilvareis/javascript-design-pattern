# Padrão do Construtor

Nas linguagens de programação clássicas orientadas a objetos, um construtor é um método especial usado para inicializar um objeto recém-criado.

Os construtores de objetos são usados ​​para criar tipos específicos de objetos - preparando o objeto para uso e aceitando argumentos que um construtor pode usar para definir os valores das propriedades e métodos dos membros quando o objeto é criado.

# Construtor de Objetos

```javascript
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
```

# Usando classes

Introduzidas no ECMAScript 2015, as classes são basicamente açúcar sintático sobre a herança baseada em protótipo existente do JavaScript. As classes são de fato "funções especiais" e, assim como você pode definir expressões e declarações de funções, a sintaxe da classe tem dois componentes: expressões de classe e declarações de classe.

O exemplo do construtor de objeto acima pode ser reescrito usando a classe como:

```javascript
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

```

[Arquivo completo](../exemples/Constructor.js)

[BACK TO README](../README.md)