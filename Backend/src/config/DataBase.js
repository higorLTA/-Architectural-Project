module.exports = {
  username: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASSWORD,
  database: process.env.DB_MYSQL_NAME,
  host: process.env.DB_MYSQL_HOST,
  dialect: process.env.DB_MYSQL_DIALECT,
  port: process.env.DB_MYSQL_PORT
};