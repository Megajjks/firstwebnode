const express = require('express');
const app = express(); //para inicializar el servidor
const morgan = require('morgan');
const path = require('path');

//settings
app.set('port', 3000); //definiendo una variable en la configuración de express
app.set('views', path.join(__dirname, 'views')) //configurando la ruta de las views
app.set('view engine', 'ejs'); //definiendo nuestro motor de plantillas

//middlewares

//routes
app.use(require('./routes/index'));

//static file
app.use(express.static(path.join(__dirname,'public'))); //ruta para acceder a los archivos estaticos

//listening the server
app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));
});