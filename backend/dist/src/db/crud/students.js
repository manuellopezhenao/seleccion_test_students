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
exports.DeleteStudent = exports.UpdateStudents = exports.CreateStudents = exports.ListStudents = void 0;
const students_1 = require("../models/students");
const ListStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield students_1.TestStudents.findAll();
        return students;
    }
    catch (err) {
        console.log(err);
        throw new Error("Can't list students");
    }
});
exports.ListStudents = ListStudents;
const CreateStudents = (students) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield students_1.TestStudents.create({
            first_name: students.first_name,
            last_name: students.last_name,
            lv_id: students.lv_id,
            group: students.group,
            email: students.email,
            phone_number: students.phone_number,
            geolocation: students.geolocation,
            status: students.status
        });
        return student;
    }
    catch (err) {
        throw new Error("Can't create student");
    }
});
exports.CreateStudents = CreateStudents;
const UpdateStudents = (students) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield students_1.TestStudents.update({
            first_name: students.first_name,
            last_name: students.last_name,
            lv_id: students.lv_id,
            group: students.group,
            email: students.email,
            phone_number: students.phone_number,
            geolocation: students.geolocation,
            status: students.status
        }, {
            where: {
                s_id: students.s_id
            }
        });
        return student;
    }
    catch (err) {
        throw new Error("Can't update student");
    }
});
exports.UpdateStudents = UpdateStudents;
const DeleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield students_1.TestStudents.destroy({
            where: {
                s_id: id
            }
        });
        return students;
    }
    catch (err) {
        throw new Error("Can't delete student");
    }
});
exports.DeleteStudent = DeleteStudent;
//# sourceMappingURL=students.js.map