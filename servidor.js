'use-strict';

const express = require('express');
      path = require('path'),
      app = express();

app.use('/', express.static('dist'));

app.get('/', function(pedido, respuesta){
  respuesta.sendFile(path.join(__dirname + '/dist/index.html'))
});
app.listen(3000, function(){
  console.log('SAE está corriendo en el puerto: 3000');
});
