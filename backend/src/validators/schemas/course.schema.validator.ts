import * as Joi from "joi";

const createCourseSchema = Joi.object({
  name: Joi.string().max(100).required(),
  credits: Joi.number().max(6).required(),
});

const updateCourseSchema = Joi.object({
  c_id: Joi.number().max(10).required(),
  name: Joi.string().max(100).required(),
  credits: Joi.number().max(6).required(),
});

const deleteCourseSchema = Joi.object({
  c_id: Joi.number().max(10).required(),
});

export { createCourseSchema, updateCourseSchema, deleteCourseSchema };
