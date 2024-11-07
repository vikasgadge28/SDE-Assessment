// src/components/WelcomeScreen.js
import React from 'react';

export const WelcomeScreen = ({ onStart }) => (
  <div className="text-center">
    <h1 className="text-2xl font-bold mb-4">Welcome to Our Survey!</h1>
    <button
      onClick={onStart}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Start Survey
    </button>
  </div>
);
