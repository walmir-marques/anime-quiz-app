import { useState } from "react";
import questions from "./data/questions";
import { Question } from "./components/Question";
import { Results } from "./components/Results";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const title = "Quiz de Animes";

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswered = (selectedOption) => {
    setAnswers([...answers, selectedOption]);
    loadNextQuestion();
  };

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-green-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border border-gray-300">
          {title}
        </div>
        <div className="p-5">
          {!showResult && (
            <Question
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          )}

          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${
              questions.length === 1 ? "" : "s"
            }`}
          {showResult && (
            <button
              onClick={handleRestartButton}
              className="px-3 py-2 rounded-md bg-green text-white bg-green-500"
            >
              Reiniciar Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
