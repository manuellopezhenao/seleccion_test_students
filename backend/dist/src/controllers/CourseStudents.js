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
exports.DeleteCourseStudents = exports.CreateCourseStudents = exports.ListCourseStudents = void 0;
const course_x_student_1 = require("../db/crud/course_x_student");
const ListCourseStudents = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudents = yield (0, course_x_student_1.ListCourseStudent)();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: courseStudents
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
});
exports.ListCourseStudents = ListCourseStudents;
const CreateCourseStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudent = req.body;
        const newcourseStudent = yield (0, course_x_student_1.CreateCourseStudent)(courseStudent);
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: newcourseStudent
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
});
exports.CreateCourseStudents = CreateCourseStudents;
const DeleteCourseStudents = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = Req.body;
        const courseStudent = yield (0, course_x_student_1.DeleteCourseStudent)(id);
        if (courseStudent === 0) {
            res.status(400).json({
                susses: false,
                mgs: "Course for student not found",
            });
            return;
        }
        if (courseStudent === 1) {
            res.status(200).json({
                susses: true,
                mgs: "Course for student deleted",
            });
            return;
        }
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
});
exports.DeleteCourseStudents = DeleteCourseStudents;
//# sourceMappingURL=CourseStudents.js.map