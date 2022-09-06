const mysql = require('mysql2')

const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'bradley4147',
    database: 'team_db'
  },
  console.log(`Connected to the books_db database.`)
);

module.exports = connection