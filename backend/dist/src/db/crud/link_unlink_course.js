"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkCourseById = exports.linkCourse = exports.unlinkCourseById = exports.unlinkCourse = void 0;
const courses_1 = require("../models/courses");
const courses_x_student_1 = require("../models/courses_x_student");
const students_1 = require("../models/students");
const unlinkCourse = (courseId, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courses_1.TestCourses.findByPk(courseId);
        if (!course) {
            throw new Error('Course not found');
        }
        const student = yield students_1.TestStudents.findByPk(studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        yield courses_x_student_1.TestCoursesXStudent.destroy({
            where: {
                c_id: courseId,
                s_id: studentId,
            },
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.unlinkCourse = unlinkCourse;
const unlinkCourseById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield courses_x_student_1.TestCoursesXStudent.destroy({
            where: {
                cxs_id: id,
            },
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.unlinkCourseById = unlinkCourseById;
const linkCourse = (courseId, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courses_1.TestCourses.findByPk(courseId);
        if (!course) {
            throw new Error('Course not found');
        }
        const student = yield students_1.TestStudents.findByPk(studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        yield courses_x_student_1.TestCoursesXStudent.create({
            c_id: courseId,
            s_id: studentId,
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.linkCourse = linkCourse;
const linkCourseById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield courses_x_student_1.TestCoursesXStudent.create({
            cxs_id: id,
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.linkCourseById = linkCourseById;
//# sourceMappingURL=link_unlink_course.js.map