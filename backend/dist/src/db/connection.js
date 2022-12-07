"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../../configs/config");
console.log(config_1.config);
const sequelize = new sequelize_1.Sequelize(config_1.config.DATA_BASE_NAME, config_1.config.USER, config_1.config.PASSWORD, {
    host: config_1.config.DATA_BASE_URL,
    dialect: 'mysql',
    logging: false,
    define: {
        freezeTableName: true
    }
});
exports.sequelize = sequelize;
require("./relations");
//# sourceMappingURL=connection.js.map