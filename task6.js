/*Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/
function checkArrayType(array) {
    let typeElement = typeof(array[0]); 
    return array.every(element => typeof(element) == typeElement);  
}

console.log(checkArrayType([3,6,7,3]));