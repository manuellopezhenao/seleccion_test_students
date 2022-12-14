import * as express from "express";
import {
  CreateStudent,
  ListStudent,
  UpdateStudent,
} from "../controllers/students";
import { DeleteStudent } from "../db/crud/students";
import {
  validateCreateStudent,
  validateDeleteStudent,
  validateUpdateStudent,
} from "../validators/validates/student.validate";

const router = express.Router();

router.get("/students", ListStudent);
router.post("/students", validateCreateStudent, CreateStudent);
router.put("/students", validateUpdateStudent, UpdateStudent);
router.delete("/students", validateDeleteStudent, DeleteStudent);

module.exports = router;
