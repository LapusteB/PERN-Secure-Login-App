const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    password: process.env.REACT_APP_DATABASE_PASSWORD,
    host: process.env.REACT_APP_DATABASE_HOST,
    port: process.env.REACT_APP_DATABASE_PORT,
    database: process.env.REACT_APP_DATABASE_NAME,
    user: process.env.REACT_APP_DATABASE_USER,
});

module.exports = pool;