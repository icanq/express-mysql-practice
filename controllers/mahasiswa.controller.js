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

const getMahasiswaById = async (req, res) => {
  const mahasiswa = await mahasiswaService.getMahasiswaById(req.params.id)
  if (!mahasiswa) res.status(404).json({ message: "Mahasiswa tidak ditemukan"})
  res.status(200).json({
    message: "Sukses dalam mengambil data",
    data: mahasiswa
  })
}

module.exports = { getAllMahasiswa, createMahasiswa, getMahasiswaById }