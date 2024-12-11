import mongoose  from "mongoose";

const answerSchema = new mongoose.Schema(
    {
        question_id: String, 
        selectedChoice: [mongoose.Schema.Types.Mixed],
        is_Correct: Boolean,
        points_awarded: Number,
    },
);


const quizAttemptSchema = new mongoose.Schema(
    {
        quiz_id: String,
        user_id: String,
        score: Number,
        timeStamp: Date,
        is_completed: Boolean, 
        answers:[answerSchema]
    },
    {collection: "quizAttempts"}
);

export default quizAttemptSchema;
