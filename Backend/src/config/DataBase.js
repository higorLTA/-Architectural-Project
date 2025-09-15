const { Sequelize } = require('sequelize');
require('dotenv').config();

const dataSource = new Sequelize(
    process.env.DB_MYSQL_NAME,
    process.env.DB_MYSQL_USER,
    process.env.DB_MYSQL_PASSWORD,
    {
        host: process.env.DB_MYSQL_HOST,
        dialect: process.env.DB_MYSQL_DIALECT,
        port: parseInt(process.env.DB_MYSQL_PORT, 10),
        logging: false,
        dialectOptions: {
            // Apenas se usar SSL no futuro
            // ssl: { rejectUnauthorized: false }
        }
    }
);

module.exports = dataSource;
