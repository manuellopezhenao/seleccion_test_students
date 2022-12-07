import * as express from "express";
import {
  CreateCourses,
  DeleteCourses,
  ListCourses,
  UpdateCourses,
} from "../controllers/courses";
import {
  validateCreateCourse,
  validateDeleteCourse,
  validateUpdateCourse,
} from "../validators/validates/course.validate";

const router = express.Router();

router.get("/courses",validateCreateCourse, ListCourses);
router.post("/courses", validateCreateCourse, CreateCourses);
router.put("/courses", validateUpdateCourse, UpdateCourses);
router.delete("/courses", validateDeleteCourse, DeleteCourses);

module.exports = router;
