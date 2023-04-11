const express = require('express');
const bcrypt = require('bcrypt');
const req = require('express/lib/request');
const app = express();
const port = 3000;
const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Alex'});
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.post('/login', (req, res) => {

});

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', (req, res) => {
    
});

app.listen(port);