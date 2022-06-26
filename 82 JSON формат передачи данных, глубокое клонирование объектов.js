'use strict';

const person = {
    name: 'Alex',
    tel: '+38055885',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// для преобразования данных объекта js в JSON используем JSON.stringify(obj)
console.log(JSON.stringify(person))

// для преобразования данных json в объект JS используем JSON.parse(jsonObj)
console.log(JSON.parse(JSON.stringify(person)))

// для глубокого клонирования объектов используем конструкцию JSON.parse(JSON.stringify(obj))
const clone = JSON.parse(JSON.stringify(person))
clone.parents.mom = 'Ann'
console.log(person)
console.log(clone)