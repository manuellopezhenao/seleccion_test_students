import { Request, Response } from 'express';
import { CreateCurses, DeleteCurses, ListCurses, UpdateCurses } from '../db/crud/curses';

const ListCourses = async (_: Request, res: Response) => {
    try {
        const courses = await ListCurses();
        res.status(200).json({
            susses: true,
            mgs: "Success",
            data: courses
        });
    } catch (err) {
        res.status(500).json({
            susses: false,
            mgs: "Error",
        });
    }
}

const CreateCourses = async (Req: Request, res: Response) => {
    try {
        const { name, credits } = Req.body;
        const courses = await CreateCurses({name, credits});
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courses
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            mgs: "Error",
        });
    }
}

const UpdateCourses = async (Req: Request, res: Response) => {
    try {
        const { id, name, credits } = Req.body;
        const newCourse = await UpdateCurses({ c_id: id, name, credits });
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: newCourse
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            mgs: "Error",
        });
    }
}

const DeleteCourses = async (Req: Request, res: Response) => {
    try {
        const { id } = Req.body;
        const courses = await DeleteCurses(id);

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

    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err
        });
    }
}




export { ListCourses, CreateCourses, UpdateCourses, DeleteCourses };