import React, { useState } from "react";
import "./App.css";
import gifts from "./data/gifts";
import questions from "./data/questions";
import GiftHelperButton from "./components/Buttons";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const getGiftSuggestion = () => {
    const matchingGift = gifts.find(
      (gift) =>
        gift.occasion ===
          questions[0].options[answers[questions[0].id] - 1].text &&
        gift.gender ===
          questions[1].options[answers[questions[1].id] - 1].text &&
        gift.ageRange ===
          questions[2].options[answers[questions[2].id] - 1].text
    );
    return matchingGift ? matchingGift.gift : "No gift found";
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      {currentQuestion && (
        <>
          <div className="p-8 m-8">
            <h2 className="text-5xl">{currentQuestion.text}</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {currentQuestion.options.map((option) => (
              <GiftHelperButton
                className=""
                key={option.id}
                onClick={() => handleAnswer(currentQuestion.id, option.id)}
              >
                {option.text}
              </GiftHelperButton>
            ))}
          </div>
        </>
      )}
      {!currentQuestion && (
        <div className="grid justify-center items-center gap-12">
          <>
            <p className="resultText">We recommend getting this as a gift:</p>
            <p className="text-5xl">{getGiftSuggestion()}</p>
            <GiftHelperButton className="m-auto" onClick={resetQuiz}>
              Start Over
            </GiftHelperButton>
          </>
        </div>
      )}
    </div>
  );
}

export default App;
