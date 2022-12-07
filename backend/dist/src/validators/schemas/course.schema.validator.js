"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseSchema = exports.updateCourseSchema = exports.createCourseSchema = void 0;
const Joi = require("joi");
const createCourseSchema = Joi.object({
    name: Joi.string().max(100).required(),
    credits: Joi.number().max(6).required(),
});
exports.createCourseSchema = createCourseSchema;
const updateCourseSchema = Joi.object({
    c_id: Joi.number().max(10).required(),
    name: Joi.string().max(100).required(),
    credits: Joi.number().max(6).required(),
});
exports.updateCourseSchema = updateCourseSchema;
const deleteCourseSchema = Joi.object({
    c_id: Joi.number().max(10).required(),
});
exports.deleteCourseSchema = deleteCourseSchema;
//# sourceMappingURL=course.schema.validator.js.map