const mahasiswaService = require('../services/mahasiswa.service')

const getAllMahasiswa = async (req, res) => {
  const mahasiswa = await mahasiswaService.getAllMahasiswa()
  res.status(200).json({
    message: "Sukses dalam mengambil data",
    data: mahasiswa
  })
}

const createMahasiswa = async (req, res) => {
  const createdMahasiswa = await mahasiswaService.createMahasiswa(req.body)
  res.status(201).json({
    message: "Sukses menambah mahasiswa",
    data: createdMahasiswa
  })
}

module.exports = { getAllMahasiswa, createMahasiswa }