const db = require('../model');
const Bio = db.biodata;

exports.create = (req, res) => { // create column
    if(!req.body.nama) {
        res.status(400).send({
            message: 'Content cant be empty!'
        });
        return;
    };

    const bio = {
        nama: req.body.nama,
        tempatLahir: req.body.tempatLahir,
        tanggalLahir: req.body.tanggalLahir,
        alamat: req.body.alamat
    };

    Bio.create(bio)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message: `Error occured while inserting bio. ${error}`
        })
    })
}

exports.findAll = (req, res) => {
    Bio.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message: `Error while retrieving biodata. ${error}`
        });
    });
}

exports.findOne = (req, res) => {
    Bio.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            message: `Cannot find bio with id = ${req.params.id}. ${error}`
        });
    });
}

exports.delete = (req, res) => {
    Bio.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(
        res.send({
            message: `Success delete bio with id = ${req.params.id} .`
        })
    )
    .catch(error => {
        res.status(500).send({
            message: `Deleting bio id ${req.params.id} was Error! ${error}`
        });
    });
}