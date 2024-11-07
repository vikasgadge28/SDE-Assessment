// src/utils/storage.js
export const saveAnswer = (sessionId, questionId, answer) => {
    let surveyData = JSON.parse(localStorage.getItem('surveyData')) || {};
    surveyData[sessionId] = surveyData[sessionId] || {};
    surveyData[sessionId][questionId] = answer;
    localStorage.setItem('surveyData', JSON.stringify(surveyData));
  };
  
  export const markCompleted = (sessionId) => {
    let surveyData = JSON.parse(localStorage.getItem('surveyData')) || {};
    surveyData[sessionId] = surveyData[sessionId] || {};
    surveyData[sessionId].status = 'COMPLETED';
    localStorage.setItem('surveyData', JSON.stringify(surveyData));
  };
  