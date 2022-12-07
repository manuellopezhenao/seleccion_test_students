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
exports.DeleteCourses = exports.UpdateCourses = exports.CreateCourses = exports.ListCourses = void 0;
const curses_1 = require("../db/crud/curses");
const ListCourses = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield (0, curses_1.ListCurses)();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: courses
        });
    }
    catch (err) {
        res.status(500).json({
            susses: false,
            mgs: "Error",
        });
    }
});
exports.ListCourses = ListCourses;
const CreateCourses = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, credits } = Req.body;
        const courses = yield (0, curses_1.CreateCurses)({ name, credits });
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courses
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            mgs: "Error",
        });
    }
});
exports.CreateCourses = CreateCourses;
const UpdateCourses = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, credits } = Req.body;
        const newCourse = yield (0, curses_1.UpdateCurses)({ c_id: id, name, credits });
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: newCourse
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            mgs: "Error",
        });
    }
});
exports.UpdateCourses = UpdateCourses;
const DeleteCourses = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = Req.body;
        const courses = yield (0, curses_1.DeleteCurses)(id);
        if (courses === 0) {
            res.status(400).json({
                success: false,
                mgs: "Course not found",
            });
            return;
        }
        if (courses === 1) {
            res.status(200).json({
                success: true,
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
exports.DeleteCourses = DeleteCourses;
//# sourceMappingURL=courses.js.map