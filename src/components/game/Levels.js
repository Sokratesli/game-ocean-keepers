// src/components/Levels.js
import React, { useState } from "react";
import levelsData from "./levels.json";

import Level1_beach from "../../assets/images/levels/level1_beach.webp";
import Level2_ocean from "../../assets/images/levels/level2_ocean.webp";
import Level3_apartment from "../../assets/images/levels/level3_apartment.webp";
import Level4_street from "../../assets/images/levels/level4_street.webp";
import Level5_forest from "../../assets/images/levels/level5_forest.webp";

const Levels = () => {
  const [currentLevel, setCurrentLevel] = useState(1); // Start bei Level 1
  const [levelStarted, setLevelStarted] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [points, setPoints] = useState(0); // Punkte für die beantworteten Fragen
  const [feedback, setFeedback] = useState(""); // Feedback basierend auf den Punkten
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index der aktuellen Frage

  const startLevel = () => {
    setLevelStarted(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Alle Fragen wurden beantwortet
      setLevelCompleted(true);
      calculateFeedback();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
    setLevelCompleted(false);
    setLevelStarted(false);
    setPoints(0); // Reset Punkte
    setFeedback(""); // Reset Feedback
    setCurrentQuestionIndex(0); // Reset Frageindex
  };

  const levelData = levelsData.levels.find(
    (level) => level.level === currentLevel
  );

  if (!levelData) {
    return <div>No data found for current level.</div>; // Fallback, wenn keine Daten gefunden werden
  }

  const { name, description, mission, questions, feedbacks, backgroundImage } =
    levelData;

  let dynamicBackgroundImage = "";
  switch (currentLevel) {
    case 1:
      dynamicBackgroundImage = Level1_beach;
      break;
    case 2:
      dynamicBackgroundImage = Level2_ocean;
      break;
    case 3:
      dynamicBackgroundImage = Level3_apartment;
      break;
    case 4:
      dynamicBackgroundImage = Level4_street;
      break;
    case 5:
      dynamicBackgroundImage = Level5_forest;
      break;
    default:
      dynamicBackgroundImage = Level1_beach; // Standardbild für den Fall, dass kein passendes Level gefunden wird
      break;
  }

  const calculateFeedback = () => {
    const maxPoints = questions.reduce(
      (acc, question) =>
        acc + question.answers.reduce((acc, answer) => acc + answer.points, 0),
      0
    );
    const percentage = (points / maxPoints) * 100;

    if (percentage <= 33) {
      setFeedback(feedbacks[0].feedback);
    } else if (percentage <= 66) {
      setFeedback(feedbacks[1].feedback);
    } else {
      setFeedback(feedbacks[2].feedback);
    }
  };

  const handleAnswer = (pointsToAdd) => {
    setPoints(points + pointsToAdd);
    nextQuestion(); // Automatisch zur nächsten Frage navigieren
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center p-4">
      <img
        src={dynamicBackgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {levelStarted ? (
        levelCompleted ? (
          <LevelCompletion
            onNextLevel={nextLevel}
            feedback={feedback}
            points={points}
          />
        ) : (
          <LevelsContent
            levelName={`Level ${levelData.level}: ${name}`}
            description={description}
            mission={mission}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
            prevQuestion={prevQuestion}
          />
        )
      ) : (
        <LevelsDescription
          onStartLevel={startLevel}
          levelName={`Level ${levelData.level}: ${name}`}
          description={description}
          mission={mission}
        />
      )}
    </div>
  );
};

const LevelsDescription = ({
  onStartLevel,
  levelName,
  description,
  mission,
}) => {
  return (
    <div className="relative z-10 text-center text-white w-1/2 mt-20 rounded-lg bg-slate-900 bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">{levelName}</h1>
      <p className="mb-4">{description}</p>
      <p className="mb-2">{mission}</p>
      <button
        onClick={onStartLevel}
        className="mt-4 bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Level
      </button>
    </div>
  );
};

const LevelsContent = ({
  levelName,
  description,
  mission,
  questions,
  currentQuestionIndex,
  handleAnswer,
  prevQuestion,
}) => {
  const question = questions[currentQuestionIndex];

  return (
    <div className="w-full h-full relative z-10 text-center text-white mt-20 rounded-lg bg-slate-900 bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">{levelName}</h1>
      <p className="mb-4">{description}</p>
      <p className="mb-2">{mission}</p>
      <Question question={question} handleAnswer={handleAnswer} />
      <div className="mt-4">
        {currentQuestionIndex > 0 && (
          <button
            onClick={prevQuestion}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-4"
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="mb-6 mt-10">
      <h2 className="text-2xl font-semibold my-10">{question.question}</h2>
      <div className="flex flex-col items-center space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="bg-ocean-500 hover:bg-ocean-700 text-white font-semibold py-2 px-4 rounded-lg  drop-shadow-md"
            onClick={() => handleAnswer(answer.points)}
          >
            {answer.answer}
          </button>
        ))}
      </div>
    </div>
  );
};


const LevelCompletion = ({ onNextLevel, feedback, points }) => {
  return (
    <div className="relative z-10 text-center text-white w-1/2 mt-20 rounded-lg bg-white bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">Level Completed!</h1>
      <p className="mb-4">{feedback}</p>
      <p className="mb-2">Points Earned: {points}</p>
      <button
        onClick={onNextLevel}
        className="mt-4 bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded  drop-shadow-md"
      >
        Next Level
      </button>
    </div>
  );
};

export default Levels;
