function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
        };
    return myFunction;
    }
const increment = createCounter(); // в increment записывается функция myFunction и ее лексическое окружение – переменная counter
const c1 = increment(); // вызывается функция myFunction со своим лексическим окружением (counter) записанным в increment
const c2 = increment();
const c3 = increment();
console.log(createCounter());
console.log('example increment', c1, c2, c3); //1, 2, 3










//
//
//
//
// let val = 7
// function createAdder() {
//        function addNumbers(a, b) {
//            let ret = a + b
//            return ret
//           }
//        return addNumbers
//      }
//  let adder = createAdder()
//  let sum = adder(val, 8)
//  console.log('example of function returning a function: ', sum)
// ®
//
//
//
// 'use strict';
//
// let number = 5; debugger
//
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }
//
// number = 6;
//
// logNumber(); debugger
//
//
//
