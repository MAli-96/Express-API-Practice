import express from 'express';
const app = express();

app.use(express.json());

const movieGenres = [
    { id: 1, type: 'horror' },
    { id: 2, type: 'comedy' },
    { id: 3, type: 'thriller' },
    { id: 4, type: 'action' },
    { id: 5, type: 'romance' }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/genres', (req, res) => {
    res.send(movieGenres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = movieGenres.find(m => m.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('This genre could not be found');
    res.send(genre);
});

app.post('/api/genres', (req, res) => {
    const genre = {
        id: movieGenres.length + 1,
        name: req.body.name
    };
    movieGenres.push(genre);
    res.send(genre)
});

app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(m => m.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('This course could not be found');
        return;
    }
    genre.name = req.body.name;
    res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
    const genre = movieGenres.find(m => m.id === parseInt(req.params.id));
    const index = movieGenres.indexOf(genre);
    movieGenres.splice(index, 1);
    res.send(genre);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});