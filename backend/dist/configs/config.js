"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
const configProd = {
    PORT: process.env.PORT,
    DATA_BASE_NAME: process.env.DATA_BASE_NAME,
    USER: process.env.USER_DB,
    PASSWORD: process.env.PASSWORD_DB,
    DATA_BASE_URL: process.env.DATA_BASE_URL,
};
const configDev = {
    DATA_BASE_NAME: 'seleccion_test',
    USER: 'root',
    PASSWORD: '',
    DATA_BASE_URL: 'localhost',
    PORT: 3001,
};
const config = process.env.NODE_ENV === 'production' ? configProd : configDev;
exports.config = config;
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === "production");
//# sourceMappingURL=config.js.map