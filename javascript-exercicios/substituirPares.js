function substituirPares(array) {
    if(!array) return "-1";
    if(!array.length) return "-1";

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0 && array[i] !== 0) {
            console.log(`${array[i]} substitui pra 0`);
            array[i] = 0;
        }
    }

    return array;
}

console.log(substituirPares());