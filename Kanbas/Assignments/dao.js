import Database from '../Database/index.js';

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignments) => assignments.course === courseId);
  }
  