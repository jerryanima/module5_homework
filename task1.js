let userNumber = +prompt("Введите число");
if (isNaN(userNumber) || (typeof userNumber != 'number')) {
    console.log('Упс, кажется, вы ошиблись');
} else {
    if (userNumber % 2 == 0) {
        console.log(userNumber + ' - число чётное');
    } else {
        console.log(userNumber + ' - число нечётное');
    }
}