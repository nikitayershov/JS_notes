
"use strict";


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
 console.log(border);


// delete options.name;
console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(Object.keys(options).length);   //-Object.keys выводит значения объекта в виде массивва.

function foo(a,b) {
    const [first] = a;
    const {eng} = b;

    return `${first} ${eng}`;
}

const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result);