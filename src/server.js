const express = require('express');
const routes = require('./routes');

const porta = 3338 || process.env.PORT;
const app = express();

app.use(routes);
app.use(express.json())

app.listen(porta, () => {console.log('Api online na rota: ' +porta)});