const mysql = require('mysql');
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } = require('../../constants/db');

module.exports = class DBConnector {
    db = null;
    connection = null;

    connect() {
        this.db = DB_NAME;
        this.connection = mysql.createConnection({
           host: DB_HOST,
           username: DB_USERNAME,
           password: DB_PASSWORD,
           multipleStatements: true
        });

        return this;
    }

    killConnection(): DBConnector {
        this.connection.end();
        this.connection = null;

        return this;
    }
}
