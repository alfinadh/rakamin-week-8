const express = require('express');
const app = express();

var dynamicroute = require('./dynamicroute.js');

app.use('/dynamicroute', dynamicroute);

app.get('/', (req,res) => {
    pool.query('SELECT * FROM actor', (err, result) => {
        if (err){
            throw err
        }
        res.send('daftar actor');
    });
});

app.listen(3000);