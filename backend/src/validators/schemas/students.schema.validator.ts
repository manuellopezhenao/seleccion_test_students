import * as Joi from "Joi";

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

const deleteStudentSchema = Joi.object({
  s_id: Joi.number().max(10).required(),
});

export { createStudentSchema, updateStudentSchema, deleteStudentSchema };
