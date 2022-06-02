"use strict";

let str = "some"; //typeof = string
let strObj = new String(str); //typeof = object

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100,
};

john.__proto__ = soldier; // Устаревший,позволяет получить все свойства объекта soldier

Object.setPrototypeOf(john,soldier); //современная форма записи присваивания портотипа для объекта
// (прменяется если объект уже существовал)

const jack = Object.create(soldier); // создание нового объекта который портотипно наследуется от soldier


console.log(john.armor);