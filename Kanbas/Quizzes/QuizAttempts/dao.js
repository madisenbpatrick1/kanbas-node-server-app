import model from "./model.js";

export async function findAttemptsByUser(userId, quizId) {
    // return all attempts that include the provided user_id and quiz_id.
    return await model.find({ user_id: userId, quiz_id: quizId });
}

export async function createQuizAttempt(attempt) {
    // should send over a complete quiz attempt schema with all fields filled in.
    delete attempt._id;
    return await model.create(attempt);
}

