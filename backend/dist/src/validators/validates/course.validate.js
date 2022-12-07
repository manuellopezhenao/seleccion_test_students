"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteCourse = exports.validateUpdateCourse = exports.validateCreateCourse = void 0;
const course_schema_validator_1 = require("../schemas/course.schema.validator");
const validate_result_1 = require("../../helpers/validate_result");
const validateCreateCourse = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, course_schema_validator_1.createCourseSchema);
exports.validateCreateCourse = validateCreateCourse;
const validateUpdateCourse = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, course_schema_validator_1.updateCourseSchema);
exports.validateUpdateCourse = validateUpdateCourse;
const validateDeleteCourse = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, course_schema_validator_1.deleteCourseSchema);
exports.validateDeleteCourse = validateDeleteCourse;
//# sourceMappingURL=course.validate.js.map