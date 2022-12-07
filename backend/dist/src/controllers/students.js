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
exports.DeleteCourse = exports.UpdateStudent = exports.CreateStudent = exports.ListStudent = void 0;
const students_1 = require("../db/crud/students");
const ListStudent = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, students_1.ListStudents)();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: students
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
});
exports.ListStudent = ListStudent;
const CreateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const newStudent = yield (0, students_1.CreateStudents)(student);
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: newStudent
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
});
exports.CreateStudent = CreateStudent;
const UpdateStudent = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = Req.body;
        yield (0, students_1.UpdateStudents)(student);
        res.status(200).json({
            susses: true,
            mgs: "Course updated",
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
});
exports.UpdateStudent = UpdateStudent;
const DeleteCourse = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = Req.body;
        const courses = yield (0, students_1.DeleteStudent)(id);
        if (courses === 0) {
            res.status(400).json({
                susses: false,
                mgs: "Course not found",
            });
            return;
        }
        if (courses === 1) {
            res.status(200).json({
                susses: true,
                mgs: "Course deleted",
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
exports.DeleteCourse = DeleteCourse;
//# sourceMappingURL=students.js.map