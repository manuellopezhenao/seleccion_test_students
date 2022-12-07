"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCoursesXStudent = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
const TestCoursesXStudent = connection_1.sequelize.define('test_courses_x_student', {
    cxs_id: {
        type: sequelize_1.DataTypes.INTEGER("10"),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    c_id: {
        type: sequelize_1.DataTypes.INTEGER("10"),
        allowNull: false,
        references: {
            model: 'test_courses',
            key: 'c_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    s_id: {
        type: sequelize_1.DataTypes.INTEGER("10"),
        allowNull: false,
        references: {
            model: 'test_students',
            key: 's_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
}, {
    timestamps: false,
});
exports.TestCoursesXStudent = TestCoursesXStudent;
TestCoursesXStudent.sync({ force: false }).then(() => {
    console.log('TestCoursesXStudent table created');
});
//# sourceMappingURL=courses_x_student.js.map