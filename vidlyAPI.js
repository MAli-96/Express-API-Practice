import express, { urlencoded } from 'express';
import movieGenres from './movieGenres.js';
import log from './logger.js';
import authenticator from './authenticator.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(log);
app.use(authenticator);

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