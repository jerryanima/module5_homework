let x = 4;
if (isNaN(x)) {
    console.log('Тип x не определён');
} else {
    switch (typeof x) {
        case 'number':
            console.log('x — число');
            break;
        case 'string':
            console.log('x — строка');
            break;
        case 'boolean':
            console.log('x - логический тип');
            break;
        default:
            console.log('Тип x не определён');
    }
}