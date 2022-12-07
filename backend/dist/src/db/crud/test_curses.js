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
exports.DeleteCurses = exports.UpdateCurses = exports.CreateCurses = exports.ListCurses = void 0;
const test_courses_1 = require("../models/test_courses");
const ListCurses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curses = yield test_courses_1.TestCourses.findAll();
        return curses;
    }
    catch (err) {
        throw new Error("Can't list courses");
    }
});
exports.ListCurses = ListCurses;
const CreateCurses = (course) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curse = yield test_courses_1.TestCourses.create({
            name: course.name,
            credits: course.credits
        });
        return curse;
    }
    catch (err) {
        throw new Error("Can't create course");
    }
});
exports.CreateCurses = CreateCurses;
const UpdateCurses = (course) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curse = yield test_courses_1.TestCourses.update({
            name: course.name,
            credits: course.credits
        }, {
            where: {
                c_id: course.c_id
            }
        });
        return curse;
    }
    catch (err) {
        throw new Error("Can't update course");
    }
});
exports.UpdateCurses = UpdateCurses;
const DeleteCurses = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curse = yield test_courses_1.TestCourses.destroy({
            where: {
                c_id: id
            }
        });
        return curse;
    }
    catch (err) {
        throw new Error("Can't delete course");
    }
});
exports.DeleteCurses = DeleteCurses;
//# sourceMappingURL=test_curses.js.map