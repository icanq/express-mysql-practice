require('dotenv').config();
// file entrypoint, dimana nanti server API bakal jalan
const express = require('express');
const { pool } = require('./config/database');
const { mahasiswaRoute } = require('./routes/mahasiswa.routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rute untuk mahasiswa
// rute untuk campus
app.use("/mahasiswa", mahasiswaRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})