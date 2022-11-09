"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnectionProvider_1 = require("./DbConnectionProvider");
const dbConnection = DbConnectionProvider_1.DbConnectionProvider.getConnection();
console.log(dbConnection);
setTimeout(() => {
    const anotherConnection = DbConnectionProvider_1.DbConnectionProvider.getConnection();
    console.log(anotherConnection);
}, 3000);
