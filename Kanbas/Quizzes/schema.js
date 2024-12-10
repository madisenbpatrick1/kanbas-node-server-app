import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["Multiple Choice", "Fill in the Blank", "True/False"] },
    title: String,
    questionText: String,
    points: Number,
    correctAnswers: [mongoose.Schema.Types.Mixed], // Can be String or Boolean
    choices: [String], // Optional, applies to Multiple Choice questions
  },
);

const QuizSchema = new mongoose.Schema(
  {
    title: String,
    course: String,
    availability: String,
    due_date: String,
    points: Number,
    num_of_q: Number,
    score: Number,
    description: String,
    assigned_to: String,
    quiz_type: String,
    assignment_group: String,
    shuffle_answers: { type: String, enum: ["Yes", "No"] },
    time_limit: String,
    multiple_attempts: { type: String, enum: ["Yes", "No"] },
    show_correct_answers: String,
    access_code: String,
    one_question_at_a_time: { type: String, enum: ["Yes", "No"] },
    webcam_required: { type: String, enum: ["Yes", "No"] },
    lock_questions_after_answering: Boolean,
    available_date: String,
    until_date: String,
    published: Boolean,
    questions: [QuestionSchema],
  },
  { collection: "quizzes" }
);

export default QuizSchema;
