const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  // host: process.env.DB_HOST || "localhost",
  // user: process.env.DB_USER || "root",
  // password: process.env.DB_PASS || "",
  // database: process.env.DB_NAME || "express_mysql",

  // DB_URI=mysql://root:@localhost:3306/express_mysql
  uri: process.env.DB_URI,
})

module.exports = { pool }