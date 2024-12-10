import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

//import Database from "../Database/index.js";
// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   console.log("in the dao ");
//   enrollments.push({ _id: Date.now(), user: userId, course: courseId });
//   return enrollments;
// }

// export function unenrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   const updatedEnrollments = enrollments.filter((enrollment) => enrollment.user!== userId || enrollment.course!== courseId);
//   console.log("in the dao unenroll");
//   Database.enrollments = updatedEnrollments;
//   return enrollments;
// }

// export function findAllEnrollments() {
//   // retrieve all enrollments from the database
//   console.log("Retrieving all enrollments...", Database.enrollments);
//   return Database.enrollments;
// }
