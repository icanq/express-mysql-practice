const { pool } = require('../config/database');

const getAllMahasiswa = async () => {
  const connection = await pool.getConnection()
  try {
    const [mahasiswa] = await connection.query('SELECT * FROM mahasiswa')
    return mahasiswa
  } catch (error) {
    console.error(error)
    return error
  } finally {
    connection.release()
  }  
}


const createMahasiswa = async (mahasiswa) => {
  const connection = await pool.getConnection()
  try {
    const createdMahasiswa = await connection.query('INSERT INTO MAHASISWA (nama, nim, username, email, password, dob) VALUES (?, ?, ?, ?, ?, ?)', [mahasiswa.nama, mahasiswa.nim, mahasiswa.username, mahasiswa.email, mahasiswa.password, mahasiswa.dob]
    );
  return createdMahasiswa
  } catch (error) {
    return error
  } finally {
    connection.release()
  }
  
}

module.exports = { getAllMahasiswa, createMahasiswa }