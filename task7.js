/*Задание 7. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/
let count1 = 0;
let count2 = 0;
let countZero = 0;
function checkArray(array){
    array.forEach(element => {
        if (!isNaN(element) && typeof element == 'number'){
            if (element == 0) {
                countZero++;
            } else if (element % 2 == 0){
                count2++;
            } else {
                count1++;
            }
        }    
    });
    console.log(`колическво четных чисел = ${count2} . количество нечетных чисел = ${count1}. Нулевых элементов = ${countZero}`)
};

//checkArray([1,2,3,4,0,undefined,'shhshh','11',66])
checkArray([0])