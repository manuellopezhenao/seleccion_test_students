"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseStudentSchema = exports.createCourseStudentSchema = void 0;
const Joi = require("joi");
const createCourseStudentSchema = Joi.object({
    cxs_id: Joi.number().max(10),
    c_id: Joi.number().max(10).required(),
    s_id: Joi.number().max(10).required(),
});
exports.createCourseStudentSchema = createCourseStudentSchema;
const deleteCourseStudentSchema = Joi.object({
    cxs_id: Joi.number().max(10).required(),
});
exports.deleteCourseStudentSchema = deleteCourseStudentSchema;
//# sourceMappingURL=course_students.schema.validator.js.map