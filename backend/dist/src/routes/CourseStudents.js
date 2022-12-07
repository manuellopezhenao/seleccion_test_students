"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const CourseStudents_1 = require("../controllers/CourseStudents");
const course_student_validate_1 = require("../validators/validates/course_student.validate");
const router = express.Router();
router.get("/coursestudents", CourseStudents_1.ListCourseStudents);
router.post("/linkcoursestudent", course_student_validate_1.validateCreateCourseStudent, CourseStudents_1.CreateCourseStudents);
router.put("/unlinkcoursestudent", course_student_validate_1.validateDeleteCourseStudent, CourseStudents_1.DeleteCourseStudents);
module.exports = router;
//# sourceMappingURL=CourseStudents.js.map