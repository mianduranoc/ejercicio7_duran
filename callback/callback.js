function saludar(callback) {
    let mensaje = 'Hola';
    callback(mensaje)
}
saludar(function(str) {
    console.log('Callback invocado!');
    console.log(str)
});
saludar(function(str) {
    str = 'Cambio en el valor del parametro';
    console.log('Otro callback invocado!');
    console.log(str)
});