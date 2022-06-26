const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8)
}
console.log(showGoodFilms(films))

function showListOfFilms(arr) {
    return arr.map(item => item.name)
        .join(', ')
}
console.log(showListOfFilms(films))

function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item.id = i;
        return item
    })
}
console.log(setFilmsIds(films))

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => !(item.id === ''))
}
console.log(checkFilms(tranformedArray))
