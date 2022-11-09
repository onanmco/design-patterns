"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnectionProvider = void 0;
class DbConnectionProvider {
    constructor() { }
    static getConnection() {
        if (!DbConnectionProvider.dbConnection) {
            DbConnectionProvider.dbConnection = "Db connection has been established on " + new Date().toISOString();
        }
        return this.dbConnection;
    }
}
exports.DbConnectionProvider = DbConnectionProvider;
