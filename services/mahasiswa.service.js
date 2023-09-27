const { pool } = require('../config/database');

const getAllMahasiswa = async () => {
  const connection = await pool.getConnection()

  const [mahasiswa] = await connection.query('SELECT * FROM mahasiswa')
  return mahasiswa
}

module.exports = { getAllMahasiswa }