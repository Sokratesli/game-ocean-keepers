// src/components/Levels.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import levelsData from "./levels.json";

import Level1_beach from "../../assets/images/levels/level1_beach.webp";
import Level2_ocean from "../../assets/images/levels/level2_ocean.webp";
import Level3_apartment from "../../assets/images/levels/level3_apartment.webp";
import Level4_street from "../../assets/images/levels/level4_street.webp";
import Level5_forest from "../../assets/images/levels/level5_forest.webp";

const Levels = ({ onPointsUpdate }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levelStarted, setLevelStarted] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [points, setPoints] = useState(0); 
  const [feedback, setFeedback] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionsToShow = 5;

  console.log("currentLevel:", currentLevel);
  console.log("levelStarted:", levelStarted);
  console.log("levelCompleted:", levelCompleted);
  console.log("points:", points);
  console.log("feedback:", feedback);
  console.log("currentQuestionIndex:", currentQuestionIndex);


  const startLevel = () => {
    setLevelStarted(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
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
    setFeedback("");
    setCurrentQuestionIndex(0);
  };

  const levelData = levelsData.levels.find(
    (level) => level.level === currentLevel
  );

  if (!levelData) {
    if (currentLevel > 5) {
      return onPointsUpdate(points);
    }
    return points;
  }

  const { name, description, mission, questions, feedbacks, backgroundImage } =
    levelData;

  const limitedQuestions = questions.slice(0, questionsToShow);

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
      dynamicBackgroundImage = Level2_ocean;
      break;
  }

  const calculateFeedback = () => {
    const maxPoints = limitedQuestions.reduce(
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
    nextQuestion();
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center p-4">
      <img
        src={dynamicBackgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <AnimatePresence mode="wait">
        {levelStarted ? (
          levelCompleted ? (
            <motion.div
              key="levelCompleted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center w-full h-full"
            >
              <LevelCompletion
                onNextLevel={nextLevel}
                feedback={feedback}
                points={points}
              />
            </motion.div>
          ) : (
            <motion.div
              key="levelContent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center w-full h-full"
            >
              <LevelsContent
                levelName={`Level ${levelData.level}: ${name}`}
                description={description}
                mission={mission}
                questions={limitedQuestions}
                currentQuestionIndex={currentQuestionIndex}
                handleAnswer={handleAnswer}
                prevQuestion={prevQuestion}
              />
            </motion.div>
          )
        ) : (
          <motion.div
            key="levelDescription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center w-full h-full"
          >
            <LevelsDescription
              onStartLevel={startLevel}
              levelName={`Level ${levelData.level}: ${name}`}
              description={description}
              mission={mission}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
    <div className="relative z-10 text-center text-white w-1/2 rounded-lg bg-slate-900 bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">{levelName}</h1>
      <p className="mb-4 text-lg">{description}</p>
      <p className="mb-2 text-lg">{mission}</p>
      <button
        onClick={onStartLevel}
        className="mt-4 bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded text-lg"
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
    <div className="relative z-10 text-center text-white w-1/2 rounded-lg bg-slate-900 bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">{levelName}</h1>
      <p className="mb-4 text-lg">{description}</p>
      <p className="mb-2 text-lg">{mission}</p>
      <Question question={question} handleAnswer={handleAnswer} />
      <div className="mt-4">
        {currentQuestionIndex > 0 && (
          <button
            onClick={prevQuestion}
            className="bg-gray-200 hover:bg-black text-gray-800 hover:text-white font-semibold py-2 px-4 rounded-lg mr-4 text-lg"
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
            className="bg-ocean-500 hover:bg-ocean-700 text-white text-lg font-semibold py-2 px-4 rounded-lg drop-shadow-md"
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
    <div className="relative z-10 text-center text-white w-1/2 rounded-lg bg-slate-900 bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">Level Completed!</h1>
      <p className="mb-4 text-lg">{feedback}</p>
      <p className="mb-2 text-lg">Points Earned: {points}</p>
      <button
        onClick={onNextLevel}
        className="mt-4 bg-ocean-500 hover:bg-ocean-700 text-white text-lg font-bold py-2 px-4 rounded drop-shadow-md"
      >
        Next Level
      </button>
    </div>
  );
};



export default Levels;