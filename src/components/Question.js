import React, { useState } from "react";

export const Question = ({ question, count, onAnswer }) => {
  const [selectAnswer, setSelectAnswer] = useState(null);

  const checkQuestion = (key) => {
    if (selectAnswer === null) {
      setSelectAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectAnswer(null);
      }, 1200);
    }
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((item, key) => (
          <div
            key={key}
            className={`border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 border-blue-300 

            ${
              selectAnswer !== null
                ? "cursor-auto"
                : "hover:opacity-60 cursor-pointer"
            }
            ${
              selectAnswer !== null &&
              selectAnswer === key &&
              key === question.correctAnswer &&
              "bg-green-500 border-green-300"
            }
            ${
              selectAnswer !== null &&
              selectAnswer === key &&
              key !== question.correctAnswer &&
              "bg-red-500 border-red-300"
            }
            

            `}
            onClick={() => checkQuestion(key)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
