import * as Joi from "joi";

const createCourseStudentSchema = Joi.object({
  cxs_id: Joi.number().max(10),
  c_id: Joi.number().max(10).required(),
  s_id: Joi.number().max(10).required(),
});

const deleteCourseStudentSchema = Joi.object({
  cxs_id: Joi.number().max(10).required(),
});

export { createCourseStudentSchema, deleteCourseStudentSchema };
