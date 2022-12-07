"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const students_1 = require("../controllers/students");
const students_2 = require("../db/crud/students");
const student_validate_1 = require("../validators/validates/student.validate");
const router = express.Router();
router.get("/students", students_1.ListStudent);
router.post("/students", student_validate_1.validateCreateStudent, students_1.CreateStudent);
router.put("/students", student_validate_1.validateUpdateStudent, students_1.UpdateStudent);
router.delete("/students", student_validate_1.validateDeleteStudent, students_2.DeleteStudent);
module.exports = router;
//# sourceMappingURL=students.js.map