const path = require('path');
const express = require('express');
const app = express();


// Configuraciones 
app.set('port', 3000)

// Enviar archivos al navegador 
app.use(express.static(path.join(__dirname,'public')))

// Iniciar el servidor 
const server = app.listen(app.get('port'), function(){
    console.log('server on port',app.get('port'))
});

// web sockets
const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', function(socket){
    console.log('new conexion', socket.id)

    socket.on('datos:interfaz',(datos) => {
        console.log(datos)
    });
});






