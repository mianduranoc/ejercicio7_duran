const asincronia = (list) => {
    let promise = new Promise( (resolve, reject) => {
        if (list instanceof Array && list.length > 0) {
            let suma = list.map(valor => Math.pow(valor, 2));
            resolve(suma);
        }
        else {
            let error = new Error("Error de ejecución");
            reject(error);
        }
    });
    return promise;
};
asincronia([2, 3, 4, 5])
    .then( respuesta => console.log(respuesta))
    .catch( error => console.error(error));

asincronia([])
    .then( respuesta => console.log(respuesta))
    .catch( error => console.error(error));