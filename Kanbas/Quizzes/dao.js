import Database from "../Database/index.js";
import model from "./model.js";
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}

export function createQuiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
} 
  