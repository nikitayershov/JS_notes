'use strict';

// Конструкторы необходимы для создания новых однотипных объектов (нп пользователи на сайтах, компоненты,
// везде, где есть шаблонизация)

// ES-5 (то как все происходит под капотом JS)
// Создание функции конструктора
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    };
}

//  если нужно добавить что-то в функцию конструктор, но к ней нет доступа, можно использовать prototype
User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`)
}

let  nikita = new User('Nikita', 26);
let  vika =  new User('Vika', 25);

vika.hello();
nikita.exit();

console.log(nikita); // User { name: 'Nikita', id: 26, human: true }
console.log(vika); // User { name: 'Vika', id: 25, human: true }


// ES-6 (добавлены классы, их удобнее использовать)
