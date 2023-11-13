//Modulos de Express
const express = require('express');
const app = express();

const path = require('path');

//Indico que Carpeta es Publica
app.use(express.static(path.join(__dirname, './public')));

//Declaro el puerto por donde escucha el servidor
let port = process.env.PORT || 3000

//Inicio Servidor
app.listen(port, () => console.log(`Servidor Activo y escuchando por puerto: ${port}`));

// ***************          RUTAS                 ***************//
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'views','register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'views','login.html'))
})

