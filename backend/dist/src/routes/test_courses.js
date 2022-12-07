"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const courses_1 = require("../controllers/courses");
const router = express.Router();
router.get('/courses', courses_1.ListCourses);
router.post('/courses', courses_1.CreateCourses);
router.put('/courses', courses_1.UpdateCourses);
router.delete('/courses', courses_1.DeleteCourses);
module.exports = router;
//# sourceMappingURL=test_courses.js.map