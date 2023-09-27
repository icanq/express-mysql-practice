const express = require('express');
const mahasiswaController = require('../controllers/mahasiswa.controller')

const mahasiswaRoute = express.Router();

mahasiswaRoute.get('/', mahasiswaController.getAllMahasiswa)

module.exports = { mahasiswaRoute }