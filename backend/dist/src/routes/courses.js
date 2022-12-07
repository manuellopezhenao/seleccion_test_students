"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const courses_1 = require("../controllers/courses");
const course_validate_1 = require("../validators/validates/course.validate");
const router = express.Router();
router.get("/courses", course_validate_1.validateCreateCourse, courses_1.ListCourses);
router.post("/courses", course_validate_1.validateCreateCourse, courses_1.CreateCourses);
router.put("/courses", course_validate_1.validateUpdateCourse, courses_1.UpdateCourses);
router.delete("/courses", course_validate_1.validateDeleteCourse, courses_1.DeleteCourses);
module.exports = router;
//# sourceMappingURL=courses.js.map