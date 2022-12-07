"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteCourseStudent = exports.validateCreateCourseStudent = void 0;
const validate_result_1 = require("../../helpers/validate_result");
const course_students_schema_validator_1 = require("../schemas/course_students.schema.validator");
const validateCreateCourseStudent = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, course_students_schema_validator_1.createCourseStudentSchema);
exports.validateCreateCourseStudent = validateCreateCourseStudent;
const validateDeleteCourseStudent = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, course_students_schema_validator_1.deleteCourseStudentSchema);
exports.validateDeleteCourseStudent = validateDeleteCourseStudent;
//# sourceMappingURL=course_student.validate.js.map