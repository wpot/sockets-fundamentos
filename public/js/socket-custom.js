var socket = io();
//eschuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {

    console.log(' se perdio coneccion con servidor');

});
//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'omar',
    mensaje: 'hola puto'

}, function(res) {
    console.log('respuesta server', res);
});
// eschuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});