const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/horarios', function(req, res) {
    res.render('horarios');
});

app.get('/forma_pagamento', function(req, res) {
    res.render('forma_pagamento');
});

app.get('/menu_principal', function(req, res) {
    res.render('menu_principal');
});

app.get('/configuracoes', (req, res) => {
    res.render('configuracoes');
});

app.get('/cabeleireiros', (req, res) => {
    res.render('cabeleireiros');
});

app.get('/horarios_marcados', (req, res) => {
    res.render('horarios_marcados');
});

app.get('/informacoes', function(req, res) {
    res.render('informacoes');
});
app.get('/dias', (req, res) => {
    res.render('dias');
});

app.get('/', (req, res) => {
    res.redirect('/login');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});