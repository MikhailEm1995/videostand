import * as mysql from 'mysql';

import { IDBConnector } from "../../types/DBConnector/index";

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from "../../constants/db";

export class DBConnector implements IDBConnector {
    private db: string;
    private connection: any;

    connect(): DBConnector {
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
