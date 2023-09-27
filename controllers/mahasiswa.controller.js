const mahasiswaService = require('../services/mahasiswa.service')

const getAllMahasiswa = async (req, res) => {
  const mahasiswa = await mahasiswaService.getAllMahasiswa()
  res.status(200).json({
    message: "Sukses dalam mengambil data",
    data: mahasiswa
  })
}

module.exports = { getAllMahasiswa }