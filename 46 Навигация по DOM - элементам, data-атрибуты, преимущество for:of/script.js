
console.log(document.body); // выводит всю информацию тега body
console.log(document.documentElement); // выводит весь код HTML
console.log(document.body.childNodes); // выводит псевдомасив NodeList со всеми дочерними элементами
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('#current').parentNode.parentElement); //позволяет получить
// родительский элемент

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получение следующего элемента
// от data-current="3"

// для того чтобы вывести только элементы без текстоввых нод можно исользовать конструкцию
for  (let node of document.body.childNodes) {
    if (node.nodeName === 'text') {
        continue;
    }
    console.log(node);
}