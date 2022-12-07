"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseStudentSchema = exports.createCourseStudentSchemaByID = exports.createCourseStudentSchema = void 0;
const Joi = require("joi");
const createCourseStudentSchema = Joi.object({
    c_id: Joi.number().max(10).required(),
    s_id: Joi.number().max(10).required(),
});
exports.createCourseStudentSchema = createCourseStudentSchema;
const validateCourseStudent = (req, res, next) => {
    const { error } = createCourseStudentSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            susses: false,
            mgs: error.details[0].message,
        });
        return;
    }
    next();
};
const createCourseStudentSchemaByID = Joi.object({
    c_id: Joi.number().max(10).required(),
    s_id: Joi.number().max(10).required(),
});
exports.createCourseStudentSchemaByID = createCourseStudentSchemaByID;
const deleteCourseStudentSchema = Joi.object({
    cxs_id: Joi.number().max(10).required(),
});
exports.deleteCourseStudentSchema = deleteCourseStudentSchema;
//# sourceMappingURL=course_students.js.map