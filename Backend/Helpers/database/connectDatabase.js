const mysql = require('mysql');

const connectDatabase = async () => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  console.log('MySQL Connection Successfully');

  return connection;
};

module.exports = connectDatabase;
