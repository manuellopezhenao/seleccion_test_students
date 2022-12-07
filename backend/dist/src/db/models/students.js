"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStudents = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
const TestStudents = connection_1.sequelize.define('test_students', {
    s_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    lv_id: {
        type: sequelize_1.DataTypes.SMALLINT("6"),
        allowNull: true,
    },
    group: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    geolocation: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.TINYINT("1"),
        allowNull: false,
        defaultValue: 1,
    }
}, {
    timestamps: false,
});
exports.TestStudents = TestStudents;
TestStudents.sync({ force: false }).then(() => {
    console.log('TestStudents table created');
});
//# sourceMappingURL=students.js.map