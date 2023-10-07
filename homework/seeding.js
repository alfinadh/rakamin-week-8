var pool = require ('./queries.js');
var fs = require('fs');


pool.connect((err,res) => {
    console.log(err);
    console.log('connected');
});

const seedQuery = fs.readFileSync('homework/seeding.sql', {encoding: 'utf8'});
pool.query(seedQuery, (err, res) => {
    console.log(err);
    console.log('Seeding Complete');
    pool.end();
});
