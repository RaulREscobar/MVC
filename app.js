let express = require('express');
let app = express();

/* Enrrutadores */
let mainRouter = require('./routers/main');

/* Vistas */
app.set('view engine', 'ejs')

app.use(express.static('public'));

/* Rutas */
app.use('/', mainRouter);



app.listen(3000, () => {
    console.log('Servidor levantado');
});