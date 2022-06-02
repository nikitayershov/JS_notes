// Место для первой задачи
function getTimeFromMinutes(time) {
    if (time < 0 || typeof(time) != 'number' || !Number.isInteger(time)) {
        return 'Ошибка, проверьте данные';
    } else {
        let hours = Math.floor(time/60);
        let min = time % 60;
        if (hours === 1) {
            return `Это ${hours} час и ${min} минут`;
        } else if (hours >= 2 && hours <= 4) {
            return `Это ${hours} часа и ${min} минут`;
        } else {
            return `Это ${hours} часов и ${min} минут`;
        }
    }
}
console.log(getTimeFromMinutes(50.5));

// Место для второй задачи

function findMaxNumber(a, b, c, d) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) ||
        typeof(a) === 'string' || typeof(b) === 'string' || typeof(c) === 'string' || typeof(d) === 'string') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
console.log(findMaxNumber(1,4,'6',4,));

