"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteStudent = exports.validateUpdateStudent = exports.validateCreateStudent = void 0;
const students_schema_validator_1 = require("../schemas/students.schema.validator");
const validate_result_1 = require("../../helpers/validate_result");
const validateCreateStudent = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, students_schema_validator_1.createStudentSchema);
exports.validateCreateStudent = validateCreateStudent;
const validateUpdateStudent = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, students_schema_validator_1.updateStudentSchema);
exports.validateUpdateStudent = validateUpdateStudent;
const validateDeleteStudent = (req, res, next) => (0, validate_result_1.ValidaSchema)(req, res, next, students_schema_validator_1.deleteStudentSchema);
exports.validateDeleteStudent = validateDeleteStudent;
//# sourceMappingURL=student.validate.js.map