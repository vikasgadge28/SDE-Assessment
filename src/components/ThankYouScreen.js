// src/components/ThankYouScreen.js
import React, { useEffect } from 'react';

export const ThankYouScreen = ({ onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(onTimeout, 5000);
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Thank you for your time!</h2>
    </div>
  );
};
