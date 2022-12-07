"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./models/courses");
const courses_x_student_1 = require("./models/courses_x_student");
const students_1 = require("./models/students");
courses_x_student_1.TestCoursesXStudent.hasOne(students_1.TestStudents, { foreignKey: 's_id', sourceKey: 's_id' });
courses_x_student_1.TestCoursesXStudent.hasOne(courses_1.TestCourses, { foreignKey: 'c_id', sourceKey: 'c_id' });
//# sourceMappingURL=relations.js.map