function verificaArray(array, num) {
    try {
        if(!array && !num) throw new ReferenceError('Envie os parâmetros!');
    
        if(typeof array !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

        if(array.length !== num) throw new RangeError('Tamanho Inválido!');

        return array;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro e um ReferenceError!");
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("Este erro e um TypeError!");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Este erro e um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);

        }
    }
}

console.log(verificaArray([1,3,2], 3));