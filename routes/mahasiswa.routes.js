const express = require('express');
const mahasiswaController = require('../controllers/mahasiswa.controller')

const mahasiswaRoute = express.Router();

mahasiswaRoute.get('/', mahasiswaController.getAllMahasiswa)
mahasiswaRoute.post('/', mahasiswaController.createMahasiswa)
mahasiswaRoute.get('/:id', mahasiswaController.getMahasiswaById)

module.exports = { mahasiswaRoute }