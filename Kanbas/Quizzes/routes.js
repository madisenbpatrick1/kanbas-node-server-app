import * as quizzesDao from "./dao.js";
import * as quizAttemptDao from "./QuizAttempts/dao.js";

export default function QuizRoutes(app) {
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
  app.post("/api/quizzes/attempts", async (req, res) => {
    const attempt = req.body;
    const newQuiz = await quizAttemptDao.createQuizAttempt(attempt);
    res.send(newQuiz);
  });
}
