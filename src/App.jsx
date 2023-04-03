import React, { useState } from "react";
import "./App.css";
import gifts from "./data/gifts";
import questions from "./data/questions";
import GiftHelperButton, {
  GiftHelperResetButton,
  GiftHelperSearchButton,
} from "./components/Buttons";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const openSearchResults = (giftName) => {
    const occasion = questions[0].options[answers[questions[0].id] - 1].text;
    const gender = questions[1].options[answers[questions[1].id] - 1].text;
    const ageRange = questions[2].options[answers[questions[2].id] - 1].text;
    const searchQuery = `${giftName} ${occasion} ${gender} ${ageRange}`;
    const encodedQuery = encodeURIComponent(searchQuery);
    window.open(`https://www.google.com/search?q=${encodedQuery}`);
  };

  const getGiftSuggestion = () => {
    const matchingGifts = gifts.filter(
      (gift) =>
        gift.occasion ===
          questions[0].options[answers[questions[0].id] - 1].text &&
        gift.gender ===
          questions[1].options[answers[questions[1].id] - 1].text &&
        gift.ageRange ===
          questions[2].options[answers[questions[2].id] - 1].text
    );
    if (matchingGifts.length === 0) {
      return "No gift found";
    } else {
      return (
        <>
          {matchingGifts.map((giftsObject) => (
            <ul className="grid gap-4">
              {giftsObject.gift.map((gift) => (
                <div
                  className="grid items-center justify-between grid-flow-col text-left"
                  key={gift.gift}
                >
                  <li>{gift.gift}</li>
                  {gift.gift.indexOf("Nothing") === -1 && (
                    <GiftHelperSearchButton
                      onClick={() =>
                        openSearchResults(
                          gift.gift,
                          questions[0].options[answers[questions[0].id] - 1]
                            .text,
                          questions[1].options[answers[questions[1].id] - 1]
                            .text,
                          questions[2].options[answers[questions[2].id] - 1]
                            .text
                        )
                      }
                    >
                      Search
                    </GiftHelperSearchButton>
                  )}
                </div>
              ))}
            </ul>
          ))}
        </>
      );
    }
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
        <div className="grid items-center justify-between gap-12">
          <>
            <p className="text-3xl">We recommend getting this as a gift:</p>

            <p className="text-3xl md:text-4xl">{getGiftSuggestion()}</p>

            <GiftHelperResetButton className="m-auto" onClick={resetQuiz}>
              Start Over
            </GiftHelperResetButton>
          </>
        </div>
      )}
    </div>
  );
}

export default App;
