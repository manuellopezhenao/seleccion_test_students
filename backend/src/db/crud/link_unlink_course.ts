import { TestCourses } from "../models/courses";
import { TestCoursesXStudent } from "../models/courses_x_student";
import { TestStudents } from "../models/students";


const unlinkCourse = async (courseId: string, studentId: string) => {
  try {
    const course = await TestCourses.findByPk(courseId);
    if (!course) {
      throw new Error('Course not found');
    }
    const student = await TestStudents.findByPk(studentId);
    if (!student) {
      throw new Error('Student not found');
    }
    await TestCoursesXStudent.destroy({
        where: {
            c_id: courseId,
            s_id: studentId,
        },
    });
  } catch (err) {
    throw new Error(err.message);
  }
}

const unlinkCourseById = async (id: number) => {
    try {
        await TestCoursesXStudent.destroy({
            where: {
                cxs_id: id,
            },
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

const linkCourse = async (courseId: string, studentId: string) => {
    try {
        const course = await TestCourses.findByPk(courseId);
        if (!course) {
        throw new Error('Course not found');
        }
        const student = await TestStudents.findByPk(studentId);
        if (!student) {
        throw new Error('Student not found');
        }
        await TestCoursesXStudent.create({
            c_id: courseId,
            s_id: studentId,
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

const linkCourseById = async (id: number) => {
    try {
        await TestCoursesXStudent.create({
            cxs_id: id,
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

export { unlinkCourse, unlinkCourseById, linkCourse, linkCourseById };