import { Request, Response } from 'express';
import { CourseStudentInterface } from '../class/courses_x_students';
import { CreateCourseStudent, DeleteCourseStudent, ListCourseStudent, UpdateCourseStudent } from '../db/crud/course_x_student';

const ListCourseStudents = async (_: Request, res: Response) => {
    try {
        const courseStudents = await ListCourseStudent();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: courseStudents
        });
    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}

const CreateCourseStudents = async (req: Request, res: Response) => {
    try {
        const courseStudent: CourseStudentInterface = req.body;
        const newcourseStudent = await CreateCourseStudent(courseStudent);
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: newcourseStudent
        });
    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}


const DeleteCourseStudents = async (Req: Request, res: Response) => {
    try {
        const { id } = Req.body;
        const courseStudent = await DeleteCourseStudent(id);

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

    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}




export {
    ListCourseStudents,
    CreateCourseStudents,
    DeleteCourseStudents
}