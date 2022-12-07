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
exports.DeleteCourseStudent = exports.UpdateCourseStudent = exports.CreateCourseStudent = exports.ListCourseStudent = void 0;
const courses_1 = require("../models/courses");
const courses_x_student_1 = require("../models/courses_x_student");
const students_1 = require("../models/students");
const ListCourseStudent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudent = yield courses_x_student_1.TestCoursesXStudent.findAll({
            include: [{ model: students_1.TestStudents }, { model: courses_1.TestCourses }],
        });
        return courseStudent;
    }
    catch (err) {
        console.log(err);
        throw new Error("Can't list Course for students");
    }
});
exports.ListCourseStudent = ListCourseStudent;
const CreateCourseStudent = (courseStudent) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCourseStudent = yield courses_x_student_1.TestCoursesXStudent.create({
            c_id: courseStudent.c_id,
            s_id: courseStudent.s_id,
        });
        return newCourseStudent;
    }
    catch (err) {
        throw new Error("Can't create course for student");
    }
});
exports.CreateCourseStudent = CreateCourseStudent;
const UpdateCourseStudent = (courseStudent) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudentUpdate = yield courses_x_student_1.TestCoursesXStudent.update({
            c_id: courseStudent.c_id,
            s_id: courseStudent.s_id,
        }, {
            where: {
                cxs_id: courseStudent.cxs_id,
            },
        });
        return courseStudentUpdate;
    }
    catch (err) {
        throw new Error("Can't update course for student");
    }
});
exports.UpdateCourseStudent = UpdateCourseStudent;
const DeleteCourseStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield courses_x_student_1.TestCoursesXStudent.destroy({
            where: {
                s_id: id,
            },
        });
        return students;
    }
    catch (err) {
        throw new Error("Can't delete course for student");
    }
});
exports.DeleteCourseStudent = DeleteCourseStudent;
//# sourceMappingURL=course_x_student.js.map