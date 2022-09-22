/*Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/
function arrayMap(array){
    for (let elem of array) {
        console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`); 
     }
}

let randomMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ]);

arrayMap(randomMap);