"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCourses = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
const TestCourses = connection_1.sequelize.define('test_courses', {
    c_id: {
        type: sequelize_1.DataTypes.INTEGER("10"),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    credits: {
        type: sequelize_1.DataTypes.SMALLINT("6"),
        allowNull: false,
    }
}, {
    timestamps: false,
});
exports.TestCourses = TestCourses;
TestCourses.sync({ force: false }).then(() => {
    console.log('TestCourses table created');
});
//# sourceMappingURL=test_courses.js.map