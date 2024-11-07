// src/App.js
import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SurveyScreen } from './components/SurveyScreen';
import { ThankYouScreen } from './components/ThankYouScreen';
import { markCompleted } from './utils/storage';

function App() {
  const [screen, setScreen] = useState('welcome');
  const [sessionId, setSessionId] = useState(null);

  const startSurvey = () => {
    const newSessionId = `session_${Date.now()}`;
    setSessionId(newSessionId);
    setScreen('survey');
  };

  const completeSurvey = () => {
    if (sessionId) {
      markCompleted(sessionId);
    }
    setScreen('thankYou');
  };

  return (
    <div className=" ml-80 mt-40 container  flex justify-center items-center shadow-xl bg-blue-100 rounded-lg w-[45vw] h-[50vh] p-6 ">
      {screen === 'welcome' && <WelcomeScreen onStart={startSurvey} />}
      {screen === 'survey' && <SurveyScreen sessionId={sessionId} onSubmit={completeSurvey} />}
      {screen === 'thankYou' && <ThankYouScreen onTimeout={() => setScreen('welcome')} />}
    </div>
  );
}

export default App;
