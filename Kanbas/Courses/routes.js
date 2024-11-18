import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });
}

