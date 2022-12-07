"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentSchema = exports.updateStudentSchema = exports.createStudentSchema = void 0;
const Joi = require("Joi");
const createStudentSchema = Joi.object({
    first_name: Joi.string().max(50).required(),
    s_lastname: Joi.string().max(50).required(),
    s_lv_id: Joi.number().max(6).required(),
    s_group: Joi.string().max(5).required(),
    s_email: Joi.string().max(100).required(),
    s_phone_number: Joi.string().max(100).required(),
    s_geolocation: Joi.string().max(200).required(),
    s_status: Joi.number().max(1).required(),
});
exports.createStudentSchema = createStudentSchema;
const updateStudentSchema = Joi.object({
    s_id: Joi.number().max(10).required(),
    first_name: Joi.string().max(50).required(),
    s_lastname: Joi.string().max(50).required(),
    s_lv_id: Joi.number().max(6).required(),
    s_group: Joi.string().max(5).required(),
    s_email: Joi.string().max(100).required(),
    s_phone_number: Joi.string().max(100).required(),
    s_geolocation: Joi.string().max(200).required(),
    s_status: Joi.number().max(1).required(),
});
exports.updateStudentSchema = updateStudentSchema;
const deleteStudentSchema = Joi.object({
    s_id: Joi.number().max(10).required(),
});
exports.deleteStudentSchema = deleteStudentSchema;
//# sourceMappingURL=students.validator.js.map