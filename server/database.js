const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

// Create a connection db
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Function to hash a password
const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

module.exports = {
  db,
  hashPassword
};
