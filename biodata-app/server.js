const express = require('express');
const cors = require('cors');
const app = express();

var corsOption = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded( {
    extended: true
}));

const bio = require('./app/controllers/controller');
const db = require('./app/model');

db.sequelizeConnection.sync()
.then(() => {
    console.log('Synced db.')
})
.catch((error) => {
    console.log(`Failed to sync db : ${error}`)
});

app.get('/', (req, res) => {
    res.json({
        message: 'Ini adalah tugas Sequelize'
    });
});

app.post('/', (req, res) => {
    bio.create(req, res)
});

app.get('/all', (req, res) => {
    bio.findAll(req, res)
});

app.get('/:id', (req, res) => {
    bio.findOne(req, res)
});

app.delete('/:id', (req, res) => {
    bio.delete(req, res)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port : ${PORT}`);
});