import React from "react";

export const Results = ({ questions, answers }) => {
  return (
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">
            {key + 1}. {item.question}
          </div>
          <div>
            <span>
              {item.correctAnswer === answers[key]
                ? "Acertouuuuu"
                : "Errouuuuu"}
              -
            </span>
            {item.options[item.correctAnswer]}
          </div>
        </div>
      ))}
    </div>
  );
};
