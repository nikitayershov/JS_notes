"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);


const obj = {
    a: 5,
    b: 1
};

// const  copy = obj; // в переменную copy кладется ссылка на объект
//
// copy.a = 10;
//
// console.log(obj);
// console.log(copy);

// копирование объекта
function copy(mainObj) { // позволяет создать поверхностную копию, вложенные объекты будут остваться ссылками
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // соединяет два объекта в один

const clone = Object.assign({}, add); // позволяет создать поверхностную копию


clone.d = 20;

console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'kacnkc';

console.log(newArray);
console.log(oldArray);


// Spread оператор
const video = ['youtube', 'vimeo', 'pornhub'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'facebook', 'instagram'];

console.log(internet);

function log (a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

console.log(...num);


const array = ['a', 'b'];

const newArray1 = [...array]; // работает как slice оператор

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};


console.log(newArray1);
console.log(newObj);
