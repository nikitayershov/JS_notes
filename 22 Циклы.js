"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break; позволяет призвать цикл при специфическом значении
        continue; // позволяет пропустить специфическое значение не прерывая цикл
    }
    console.log(i);
}
