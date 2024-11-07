// src/components/SurveyScreen.js
import React, { useState } from 'react';
import { questions } from '../questions';
import { saveAnswer } from '../utils/storage';

export const SurveyScreen = ({ sessionId, onSubmit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const handleAnswerChange = (questionId, answer) => {
    const updatedResponses = { ...responses, [questionId]: answer };
    setResponses(updatedResponses);
    saveAnswer(sessionId, questionId, answer);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="text-center">
        <div className=' font-bold text-4xl mb-6'>Customer Survey</div>
    <div className=' text-end mb-6 font-bold'>{currentQuestion.no}/5</div>
      <h2 className="text-xl font-bold">{currentQuestion.no}. {currentQuestion.question}</h2>
      <div className="my-4">
        {currentQuestion.type === 'rating' ? (
          [...Array(currentQuestion.scale)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleAnswerChange(currentQuestion.id, i + 1)}
              className={`py-2 px-4 m-1 ${responses[currentQuestion.id] === i + 1 ? 'bg-blue-500' : 'bg-gray-200'} rounded`}
            >
              {i + 1}
            </button>
          ))
        ) : (
          <textarea
            value={responses[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="bg-gray-300 text-black py-2 px-4 rounded"
        >
          Previous
        </button>
        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button onClick={onSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
