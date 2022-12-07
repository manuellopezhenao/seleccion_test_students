import { Request, Response } from 'express';
import { StudentsInterface } from '../class/students';
import { CreateStudents, DeleteStudent, ListStudents, UpdateStudents } from '../db/crud/students';

const ListStudent = async (_: Request, res: Response) => {
    try {
        const students = await ListStudents();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: students
        });
    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}

const CreateStudent = async (req: Request, res: Response) => {
    try {

        const student: StudentsInterface = req.body;
        const newStudent = await CreateStudents(student);
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: newStudent
        });
    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}

const UpdateStudent = async (Req: Request, res: Response) => {
    try {
        const student : StudentsInterface = Req.body;
        await UpdateStudents(student);
        res.status(200).json({
            susses: true,
            mgs: "Course updated",
        });

    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}

const DeleteCourse = async (Req: Request, res: Response) => {
    try {
        const { id } = Req.body;
        const courses = await DeleteStudent(id);

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

    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}




export {
    ListStudent,
    CreateStudent,
    UpdateStudent,
    DeleteCourse
}