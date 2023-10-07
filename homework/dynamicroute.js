var express = require ('express');
var app = express ();

app.use(express.json())

//menampilkan data seluruh list film
app.get('/movie', (req,res) => {
    res.send('router movie');
});

//menampilkan data film berdasarkan id
app.get('/movie/:id', async (req, res) => {
    const params = req.params
    const movie = await movie.findById(id);
    if (!movie) {
        res.status(404).json({
            message: "data tidak ditemukan"
        });
    } else {
        res.json(movie);
    }
});

//menampilkan list category
app.get('/category', (req,res) => {
    res.send('category movie');
});

//menampilkan data list film berdasarkan category
app.get('/movie/category/:category', async (req, res) => {
    const params = req.params
    const filteredMovie = movie.filter((movie) => movie.category === category)
    if (filteredMovie.length === 0) {
        res.status(404).json({
            message: "data tidak ditemukan"
        });
    } else {
        res.json(filteredMovie);
    }
});

app.listen(3000);